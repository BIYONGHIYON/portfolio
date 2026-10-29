// 사이트에 표시되는 내용은 대부분 이 파일에서 수정합니다.
// type: award(수상) · study(학업) · activity(활동) · military(병역) · life(기타)

window.PORTFOLIO = {
  timeline: [
    {
      period: "2022 — 2026",
      label: "대학 · 병역",
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
      label: "어린 시절",
      items: [
        { date: "2015.10", type: "award", title: "2015 강원도 청소년창의력경진대회 기술분과 금상", org: "강원도 교육감상" },
        { date: "2015.07", type: "award", title: "2015 대한민국 학생창의력 챔피언 강원도 금상", org: "강원도 교육감상" },
        { date: "2015.06", type: "award", title: "제61회 강원도과학전람회 물리부문 장려상", org: "강원도 교육감상" },
        { date: "2015.04", type: "award", title: "제48회 과학의 날 미래창조과학부장관상", org: "장관상" },
        { date: "2003.08", type: "life", title: "강원도 원주시 출생" }
      ]
    }
  ],

  // 프로젝트는 아직 비어 있습니다. 아래 형식으로 추가하면 카드가 생깁니다.
  // { title: "", period: "", role: "", summary: "", tags: [""], link: "" }
  projects: []
};
