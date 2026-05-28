import type { User } from '../data/users';
import type { Comment } from '../data/comments';
type CommentWithAuthor = Comment & {
  author: User;
};

export interface PostWithAuthorAndComments {
  author: User;
  comments: CommentWithAuthor[];
  id: string;
  comment: string;
  userId: string;
  image: string;
  createdAt: string;
}