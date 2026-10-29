# Portfolio

빌드 도구 없이 동작하는 정적 포트폴리오 사이트입니다.

- `index.html` — 페이지 구조와 소개 문구
- `data.js` — 이력·프로젝트 데이터 (내용 수정은 대부분 여기서)
- `style.css` — 스타일 (라이트·다크 모드)
- `main.js` — 이력 필터, 스크롤 애니메이션, 히어로 배경

## 로컬에서 보기

```bash
python3 -m http.server 5173
```

## 배포

GitHub 저장소 Settings → Pages에서 `main` 브랜치의 `/ (root)`를 선택하면
`https://biyonghiyon.github.io/portfolio/`에 게시됩니다.
