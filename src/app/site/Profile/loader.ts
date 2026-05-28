import { type LoaderFunctionArgs } from 'react-router-dom';
import { getPostsByUserId } from '../../../services/post/get-posts-by-user-id';


export const profileLoader = ({ params }: LoaderFunctionArgs) => {

  const userId = params.userId;

  if (!userId) {
    throw new Response("User ID is required", { status: 400 });
  }

  const postsResponse = getPostsByUserId(userId);

  return { 
    success: true ,
    posts: postsResponse,
    userId
  };
}