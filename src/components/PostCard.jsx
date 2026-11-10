import { Link } from 'react-router';

function PostCard({ post }) {
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.body}</p>

      <span>
        👍 {post.reactions?.likes ?? 0} likes
      </span>

      <Link
        to={`/posts/${post.id}`}
        className="view-button"
      >
        Read More →
      </Link>
    </div>
  );
}

export default PostCard;