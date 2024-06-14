import axios from 'axios';

export async function getPosts() {
  try {
    const response = await axios.get('http://localhost:5000/posts');
    return response;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
}
