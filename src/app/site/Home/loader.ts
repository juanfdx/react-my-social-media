import { comments } from '../../../data/comments';
import { posts } from '../../../data/posts';
import { users } from '../../../data/users';
import { getPostsWithUsersAndComments } from '../../../services/post/get-posts-with-users-comments';


export const homeLoader = () => {

  const postsResponse = getPostsWithUsersAndComments(posts, users, comments);

  return { 
    success: true ,
    posts: postsResponse
  };

}