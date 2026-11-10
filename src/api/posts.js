const BASE_URL = 'https://dummyjson.com';

export async function getPosts(signal) {
  const response = await fetch(
    `${BASE_URL}/posts?limit=10`,
    { signal }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  return response.json();
}

export async function getPost(postId, signal) {
  const response = await fetch(
    `${BASE_URL}/posts/${postId}`,
    { signal }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }

  return response.json();
}