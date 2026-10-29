// 사이트에 표시되는 내용은 대부분 이 파일에서 수정합니다.
// type: award(수상) · study(학업) · activity(활동) · military(병역) · life(기타)

window.PORTFOLIO = {
  timeline: [
    {
      period: "2022 — 2026",
      label: "대학",
      items: [
        { date: "2026.07", type: "study", title: "2026-1학기 학기우등생" },
        { date: "2026.02", type: "study", title: "2025-2학기 학기우등생" },
        { date: "2025.09", type: "activity", title: "프로그래밍기초와실습 실습조교" },
        { date: "2025.07", type: "study", title: "2025-1학기 학기우등생" },
        { date: "2025.02", type: "military", title: "대한민국 육군 병장 만기전역", org: "15사단" },
        { date: "2023.07", type: "study", title: "2023-1학기 학기우등생" },
        { date: "2023.03", type: "activity", title: "멀티미디어공학과 학생회 편집국장", org: "동국대학교" },
        { date: "2022.12", type: "award", title: "2022 어드벤처디자인경진대회 우수상", org: "단과대학상 · 팀대표" },
        { date: "2022.08", type: "activity", title: "제25기 대학생 재능봉사 캠프사업 교육 봉사" },
        { date: "2022.07", type: "study", title: "2022-1학기 학기우등생" },
        { date: "2022.03", type: "activity", title: "멀티미디어공학과 학생회 편집국원", org: "동국대학교" }
      ]
    },
    {
      period: "2016 — 2021",
      label: "중·고등학교",
      items: [
        { date: "2018.05", type: "award", title: "제6회 세종학생과학발명품경진대회 장려상", org: "세종특별자치시 교육감상" },
        { date: "2018.01", type: "award", title: "세종창의과학캠프 최우수 프로젝트상", org: "세종과학예술영재학교장상" },
        { date: "2016.12", type: "award", title: "제2회 원자력 창의력경진대회 장려상", org: "한국원자력연구원장상" },
        { date: "2016.05", type: "award", title: "2016 코리아컵 항공우주과학경진대회 드론장애물레이싱 우수상", org: "대한항공 사장상" }
      ]
    },
    {
      period: "2003 — 2015",
      label: "초등학교",
      items: [
        { date: "2015.10", type: "award", title: "2015 강원도 청소년창의력경진대회 기술분과 금상", org: "강원도 교육감상" },
        { date: "2015.07", type: "award", title: "2015 대한민국 학생창의력 챔피언 강원도 금상", org: "강원도 교육감상" },
        { date: "2015.06", type: "award", title: "제61회 강원도과학전람회 물리부문 장려상", org: "강원도 교육감상" },
        { date: "2015.04", type: "award", title: "제48회 과학의 날 미래창조과학부장관상", org: "장관상" },
        { date: "2003.08", type: "life", title: "강원도 원주시 출생" }
      ]
    }
  ],

  // 형식: { title, kind, period, role, summary, highlights: [], tags: [], links: [{ label, url }] }
  projects: [
    {
      title: "TopOut",
      kind: "모바일 앱 · iOS / Android 출시",
      period: "2026.06 — 현재",
      role: "개인 프로젝트",
      summary: "등반 시작부터 완등 순간까지 자동으로 찾아주는 실내 클라이밍 촬영 앱입니다. 긴 영상을 다시 돌려보며 장면을 찾는 대신, 기기 안에서 움직임과 자세를 분석해 필요한 구간만 골라 줍니다.",
      highlights: [
        "App Store · Google Play 출시 (v2.3)",
        "기기 내 자세 추정과 MobileSAM으로 매트 경계 자동 탐지",
        "한 번의 촬영에서 여러 등반 시도를 자동으로 구분",
        "영상을 서버로 보내지 않는 온디바이스 분석 · 9개 언어 지원"
      ],
      tags: ["Swift", "Kotlin", "Jetpack Compose", "Apple Vision", "MoveNet", "MobileSAM"],
      links: [
        { label: "App Store", url: "https://apps.apple.com/app/id6790163178" },
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.topout.cam" },
        { label: "소개 페이지", url: "https://topout-portfolio.vercel.app/" },
        { label: "GitHub", url: "https://github.com/BIYONGHIYON/TopOut-app" }
      ]
    },
    {
      title: "CtrS",
      kind: "딥러닝 연구 · 위성영상 팬샤프닝",
      period: "2026.09 — 현재",
      role: "팀장 · 4인",
      summary: "고해상도 흑백 위성영상(PAN)과 저해상도 다중분광영상(MS)을 합쳐 고해상도 컬러 영상을 복원하는 팬샤프닝 연구입니다. 동국대 종합설계1 프로젝트로 SSA-MRN의 성능을 개선하고 있습니다.",
      highlights: [
        "병렬 가지 + 축척 혼합 학습으로 새 기준 모델 C2MS 채택",
        "원본 SSA-MRN 대비 QB RR PSNR +0.87 dB (3시드 평균)",
        "학습하지 않은 센서(WV2)에서 색 치우침 7.2% → 1.0%",
        "GF2·WV3·학습하지 않은 WV2 센서에서도 원본 대비 개선 (3시드)"
      ],
      tags: ["PyTorch", "Computer Vision", "Pansharpening", "Remote Sensing"],
      links: [
        { label: "GitHub", url: "https://github.com/BIYONGHIYON/CtrS" }
      ]
    },
    {
      title: "Linkcast",
      kind: "웹 서비스 · 실시간 P2P 화면 공유",
      period: "2026.09 — 2026.10",
      role: "개인 프로젝트",
      summary: "USB 캡처보드나 화면 공유로 입력한 콘솔·PC 화면을 링크 하나로 공유하는 소규모 실시간 방송 서비스입니다. 송출자가 최대 5명에게 영상을 보내고, 모두가 브라우저에서 음성으로 대화할 수 있습니다.",
      highlights: [
        "WebRTC P2P로 최대 1080p 60fps 초저지연 송출",
        "송출자·참가자 전원이 참여하는 음성 통화",
        "클릭·터치 드래그로 포인터를 공유하는 레이저 모드",
        "Cloudflare Workers · Durable Objects 기반 시그널링"
      ],
      tags: ["TypeScript", "React", "WebRTC", "Cloudflare Workers", "Durable Objects"],
      links: [
        { label: "서비스 열기", url: "https://linkcast.byeonghyeon383.workers.dev/" },
        { label: "GitHub", url: "https://github.com/BIYONGHIYON/linkcast" }
      ]
    },
    {
      title: "NODE",
      kind: "게임 · 2.5D 로컬 협동 플랫포머",
      period: "2026.04 — 2026.06",
      role: "개인 프로젝트",
      summary: "두 우주비행사가 로프로 서로를 이어 우주를 탐험하는 2인 로컬 협동 게임입니다. 파트너나 지형에 로프를 걸고 스윙하며 퍼즐을 풀고, 흩어진 연료통을 모아 다음 행성으로 넘어갑니다.",
      highlights: [
        "파트너·지형에 거는 로프 스윙 액션",
        "고중력 목성, 무중력 토성 등 행성마다 다른 중력",
        "밀고 당기는 운석과 지형을 활용한 협동 퍼즐",
        "Windows · macOS 설치 파일 배포"
      ],
      tags: ["Unity", "C#", "Local Co-op"],
      links: [
        { label: "다운로드", url: "https://github.com/BIYONGHIYON/NODE/releases/latest" },
        { label: "GitHub", url: "https://github.com/BIYONGHIYON/NODE" }
      ]
    }
  ]
};
