import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { getPost } from '../api/posts';
import { getComments } from '../api/comments';
import Comments from '../components/Comments';

function PostDetailPage() {
  const { postId } = useParams();

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function loadData() {
      setLoading(true);
      setError('');
      setPost(null);
      setComments([]);

      try {
        const [postData, commentsData] = await Promise.all([
          getPost(postId, controller.signal),
          getComments(postId, controller.signal)
        ]);

        if (!controller.signal.aborted) {
          setPost(postData);
          setComments(commentsData.comments);
        }
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError('게시글 또는 댓글 조회에 실패했습니다.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadData();

    return () => controller.abort();
  }, [postId]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <Link to="/" className="back-button">
        ← Back to Posts
      </Link>

      {error ? (
        <p>{error}</p>
      ) : post ? (
        <>
          <div className="post-card">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <span>
              👍 {post.reactions?.likes ?? 0} likes
            </span>
          </div>

          <Comments comments={comments} />
        </>
      ) : (
        <p>게시글을 찾을 수 없습니다.</p>
      )}
    </div>
  );
}

export default PostDetailPage;