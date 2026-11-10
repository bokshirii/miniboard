# Mini Board

React와 Vite를 활용하여 만든 간단한 게시판 프로젝트입니다. React의 기본 개념과 컴포넌트 구조, API를 이용한 데이터 조회, 페이지 이동 기능을 연습하기 위해 제작했습니다.

## 주요 기능

- **게시글 목록 조회:** DummyJSON API를 이용해 게시글 10개 표시
- **게시글 상세 조회:** 게시글 클릭 시 상세 페이지로 이동
- **댓글 조회:** 선택한 게시글에 달린 댓글 표시
- **페이지 이동:** React Router를 이용한 URL 기반 라우팅
- **로딩 및 오류 처리:** 데이터를 불러오는 동안 로딩 상태 표시 및 오류 안내

## 사용 기술

- React
- JavaScript
- Vite
- React Router
- CSS
- DummyJSON API

## 실행 방법

프로젝트를 다운로드한 뒤 터미널에서 다음 명령어를 실행합니다.

```bash
npm install
npm run dev
```

터미널에 표시되는 Local 주소로 접속하면 됩니다.

## 프로젝트 구조

```text
src/
├── api/
│   ├── posts.js
│   └── comments.js
├── components/
│   ├── PostCard.jsx
│   └── Comments.jsx
├── pages/
│   ├── HomePage.jsx
│   └── PostDetailPage.jsx
├── routes/
│   └── router.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 학습 내용

이번 프로젝트를 통해 다음 내용을 학습했습니다.

- `useState`를 이용한 상태 관리
- `useEffect`를 이용한 API 데이터 요청
- `fetch`와 `async/await`를 활용한 비동기 처리
- Props를 활용한 컴포넌트 간 데이터 전달
- `map()`을 이용한 반복 렌더링
- React Router를 이용한 페이지 이동
- 컴포넌트와 페이지의 역할에 따른 파일 분리

## 참고 자료

[React Mini Board 예시 레포](https://github.com/she0108/react-miniboard-study)

[DummyJSON API](https://dummyjson.com/)