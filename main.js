(() => {
  const data = window.PORTFOLIO || { timeline: [], projects: [] };
  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // 테마 전환
  document.querySelector(".theme-toggle").addEventListener("click", () => {
    const isDark = root.dataset.theme
      ? root.dataset.theme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = isDark ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  });

  // 이력
  const timelineEl = document.querySelector("[data-timeline]");
  timelineEl.innerHTML = data.timeline.map((era) => `
    <div class="era reveal">
      <div class="era-head">
        <div class="period">${esc(era.period)}</div>
        <div class="label">${esc(era.label)}</div>
      </div>
      <ol>
        ${era.items.map((it) => `
          <li data-type="${esc(it.type)}">
            <time>${esc(it.date)}</time>
            <div><span class="t">${esc(it.title)}</span>${it.org ? `<span class="o">${esc(it.org)}</span>` : ""}</div>
          </li>`).join("")}
      </ol>
    </div>`).join("");

  document.querySelectorAll(".filters button").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filters button").forEach((b) => b.classList.toggle("active", b === btn));
      const f = btn.dataset.filter;
      timelineEl.querySelectorAll(".era").forEach((era) => {
        let visible = 0;
        era.querySelectorAll("li").forEach((li) => {
          const show = f === "all" || li.dataset.type === f;
          li.classList.toggle("hidden", !show);
          if (show) visible++;
        });
        era.classList.toggle("empty", visible === 0);
      });
    });
  });

  // 프로젝트
  const projectsEl = document.querySelector("[data-projects]");
  projectsEl.innerHTML = data.projects.length
    ? data.projects.map((p) => {
        const tag = p.link ? "a" : "article";
        const href = p.link ? ` href="${esc(p.link)}" target="_blank" rel="noopener"` : "";
        return `
          <${tag} class="project reveal"${href}>
            <span class="meta mono">${esc(p.period)}${p.role ? " · " + esc(p.role) : ""}</span>
            <h3>${esc(p.title)}</h3>
            <p>${esc(p.summary)}</p>
            <div class="tags">${(p.tags || []).map((t) => `<span>${esc(t)}</span>`).join("")}</div>
          </${tag}>`;
      }).join("")
    : `<div class="project empty reveal"><span class="meta mono">coming soon</span><h3>프로젝트를 정리하고 있습니다</h3><p>앱 · 웹 · 컴퓨터비전 프로젝트가 곧 추가됩니다.</p></div>`;

  // 스크롤 등장
  const reveals = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("in"));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach((el) => io.observe(el));
  }

  // 숫자 카운트업
  document.querySelectorAll("[data-count]").forEach((el) => {
    if (reduceMotion) return;
    const target = +el.dataset.count;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const k = Math.min(1, (now - start) / 900);
        el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3)));
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
  });

  // 히어로 배경: 마우스를 따라 퍼지는 점 격자 (영상의 픽셀 격자를 모티프로)
  const canvas = document.querySelector(".hero-canvas");
  const ctx = canvas.getContext("2d");
  const pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999 };
  let w = 0, h = 0, dpr = 1, raf = 0;
  const GAP = 28;

  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (reduceMotion) draw(0);
  };

  const draw = (t) => {
    const rgb = getComputedStyle(root).getPropertyValue("--dot").trim();
    pointer.x += (pointer.tx - pointer.x) * 0.12;
    pointer.y += (pointer.ty - pointer.y) * 0.12;
    ctx.clearRect(0, 0, w, h);
    for (let y = GAP / 2; y < h; y += GAP) {
      for (let x = GAP / 2; x < w; x += GAP) {
        const wave = reduceMotion ? 0 : Math.sin(x * 0.012 + y * 0.018 + t * 0.0012) * 0.5 + 0.5;
        const d = Math.hypot(x - pointer.x, y - pointer.y);
        const near = Math.max(0, 1 - d / 180);
        const r = 0.9 + wave * 0.6 + near * 2.6;
        ctx.fillStyle = `rgba(${rgb}, ${0.08 + wave * 0.06 + near * 0.45})`;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  };

  const loop = (t) => { draw(t); raf = requestAnimationFrame(loop); };

  window.addEventListener("resize", resize);
  canvas.parentElement.addEventListener("pointermove", (e) => {
    const r = canvas.getBoundingClientRect();
    pointer.tx = e.clientX - r.left; pointer.ty = e.clientY - r.top;
  });
  canvas.parentElement.addEventListener("pointerleave", () => { pointer.tx = pointer.ty = -9999; });

  resize();
  if (!reduceMotion) {
    // 화면 밖에서는 멈춤
    new IntersectionObserver(([e]) => {
      cancelAnimationFrame(raf);
      if (e.isIntersecting) raf = requestAnimationFrame(loop);
    }).observe(canvas);
  }
})();
