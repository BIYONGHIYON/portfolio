(() => {
  const data = window.PORTFOLIO || { timeline: [], projects: [] };
  const root = document.documentElement;

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
    <div class="era">
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

  // 캡션: 화면 전용 문장은 인쇄(PDF)에서 숨기고, 영상은 볼 수 있는 주소를 인쇄용으로 덧붙임
  const captionHtml = (p) => {
    const m = p.media;
    const parts = esc(m.caption).split(/(?<=\.)\s+/);
    const body = parts.map((t) => t.includes("이미지를 누르면") ? `<span class="screen-only">${t}</span>` : t).join(" ");
    const page = (p.links || []).find((l) => l.primary);
    const where = m.type === "video" && page
      ? ` <span class="print-only">영상의 한 장면을 사진으로 첨부했습니다. 영상은 <a href="${esc(page.url)}">${esc(page.url.replace(/^https?:\/\//, "").replace(/\/$/, ""))}</a>에서 볼 수 있습니다.</span>`
      : "";
    return body + where;
  };

  // 프로젝트
  const projectsEl = document.querySelector("[data-projects]");
  projectsEl.innerHTML = data.projects.length
    ? data.projects.map((p) => `
        <article class="project">
          <span class="meta mono">${esc(p.period)}${p.role ? " · " + esc(p.role) : ""}</span>
          <div>
            <h3>${esc(p.title)}</h3>
            ${p.kind ? `<span class="kind">${esc(p.kind)}</span>` : ""}
          </div>
          <p>${esc(p.summary)}</p>
          ${(p.highlights || []).length ? `<ul class="highlights">${p.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>` : ""}
          <div class="tags">${(p.tags || []).map((t) => `<span>${esc(t)}</span>`).join("")}</div>
          ${(p.links || []).length ? `<ul class="print-links print-only">${p.links.map((l) => `<li${l.primary ? ' class="primary"' : ""}><span>${esc(l.label)}</span><a href="${esc(l.url)}">${esc(l.url.replace(/^https?:\/\//, "").replace(/\/$/, ""))}</a></li>`).join("")}</ul>` : ""}
          ${(p.links || []).length ? `<div class="links">${p.links.map((l) => `<a${l.primary ? ' class="primary"' : ""} href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join("")}</div>` : ""}
          ${p.media ? `<figure class="project-media ${p.media.type === "images" ? "image-media" : "video-media"}">
            ${p.media.type === "images"
              ? p.media.items.map((it) => `<a class="image-link" href="${esc(it.src)}" target="_blank" rel="noopener" aria-label="${esc(it.label)} · 원본 크기로 보기"><img src="${esc(it.src)}" alt="${esc(it.label)}" loading="lazy" width="${it.width}" height="${it.height}"></a>`).join("")
              : `<video controls playsinline preload="none" poster="${esc(p.media.poster)}" aria-label="${esc(p.media.label)}"><source src="${esc(p.media.src)}" type="video/mp4">영상을 재생할 수 없습니다. <a href="${esc(p.media.src)}">${esc(p.media.label)} 보기</a></video><img class="video-still print-only" src="${esc(p.media.poster)}" alt="${esc(p.media.label)} 장면">`}
            <figcaption>${captionHtml(p)}</figcaption>
          </figure>` : ""}
        </article>`).join("")
    : `<div class="project empty"><span class="meta mono">coming soon</span><h3>프로젝트를 정리하고 있습니다</h3><p>앱 · 웹 · 컴퓨터비전 프로젝트가 곧 추가됩니다.</p></div>`;

})();
