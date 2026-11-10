import { Routes, Route } from 'react-router';
import HomePage from '../pages/HomePage';
import PostDetailPage from '../pages/PostDetailPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts/:postId" element={<PostDetailPage />} />
      <Route path="*" element={<p>페이지를 찾을 수 없습니다.</p>} />
    </Routes>
  );
}

export default AppRoutes;