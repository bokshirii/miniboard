import { useEffect, useState } from 'react';
import { getPosts } from '../api/posts';
import PostCard from '../components/PostCard';

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    getPosts(controller.signal)
      .then((data) => setPosts(data.posts))
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError('게시글을 불러오지 못했습니다.');
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Recent Posts</h2>

      {posts.length === 0 ? (
        <p>게시글이 없습니다.</p>
      ) : (
        <div className="post-list">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;