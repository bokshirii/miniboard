export async function getComments(postId, signal) {
  const response = await fetch(
    `https://dummyjson.com/posts/${postId}/comments`,
    { signal }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch comments');
  }

  return response.json();
}