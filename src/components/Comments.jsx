function Comments({ comments }) {
  return (
    <div>
      <h2>Comments ({comments.length})</h2>

      {comments.length === 0 ? (
        <p>아직 댓글이 없습니다.</p>
      ) : (
        comments.map((comment) => (
          <div className="comment-card" key={comment.id}>
            <strong>
              {comment.user?.username ?? 'Anonymous'}
            </strong>
            <p>{comment.body}</p>
            <span>👍 {comment.likes} likes</span>
          </div>
        ))
      )}
    </div>
  );
}

export default Comments;