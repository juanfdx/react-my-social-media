import { comments, type Comment } from '../../data/comments';
import { posts, type Post } from '../../data/posts';
import { users, type User } from '../../data/users';

type CommentWithAuthor = Comment & {
  author: User;
};

type PostWithAuthorAndComments = Post & {
  author: User;
  comments: CommentWithAuthor[];
};



export function getPostsByUserId(
  userId: string,
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

  return posts
    .filter(post => post.userId === userId) // 👈 key difference
    .map(post => {

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