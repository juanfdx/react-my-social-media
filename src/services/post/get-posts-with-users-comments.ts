import type { User } from '../../data/users';
import type { Post } from '../../data/posts';
import type { Comment } from '../../data/comments';

type CommentWithAuthor = Comment & {
  author: User;
};

type PostWithAuthorAndComments = Post & {
  author: User;
  comments: CommentWithAuthor[];
};

/*====================================================================
  GET POST WITH USER AND COMMENTS DATA
=====================================================================*/
export function getPostsWithUsersAndComments(
  posts: Post[],
  users: User[],
  comments: Comment[]
): PostWithAuthorAndComments[] {

  const usersMap = new Map(
    users.map(user => [user.id, user])
  );

  const commentsByPost = comments.reduce((acc, comment) => {

    const author = usersMap.get(comment.userId);

    if (!author) {
      throw new Error(
        `Comment author not found: ${comment.userId}`
      );
    }

    if (!acc[comment.postId]) {
      acc[comment.postId] = [];
    }

    acc[comment.postId].push({
      ...comment,
      author,
    });

    return acc;

  }, {} as Record<string, CommentWithAuthor[]>);

  return posts.map(post => {

    const author = usersMap.get(post.userId);

    if (!author) {
      throw new Error(
        `Post author not found: ${post.userId}`
      );
    }

    return {
      ...post,
      author,
      comments: commentsByPost[post.id] || [],
    };
  });
}