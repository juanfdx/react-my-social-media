import type { User } from './users';


export interface Comment {
  id: string;
  userId: string;
  postId: string;
  user: User;
  comment: string;
  createdAt: string;
}

export const comments: Comment [] = [
  { 
    id: '1', 
    userId: '1',
    postId: '1',
    user: { id: '1', name: 'John Doe', image: 'https://i.pravatar.cc/50?u=2'}, 
    comment: 'Honestly this is so well done, really impressive work here', 
    createdAt: '1h ago' 
  },
  { 
    id: '2', 
    userId: '2',
    postId: '1',
    user: { id: '2', name: 'Mark Kay', image: null}, 
    comment: 'This is super inspiring, love the creativity behind it all', 
    createdAt: '2h ago' 
  },
  { 
    id: '3', 
    userId: '3',
    postId: '4',
    user: { id: '3', name: 'Susan Smith', image: 'https://i.pravatar.cc/50?u=10'}, 
    comment: 'Such a strong visual, everything fits together perfectly here', 
    createdAt: '3h ago' 
  },
  { 
    id: '4', 
    userId: '4',
    postId: '4',
    user: { id: '4', name: 'Edu Lopez', image: 'https://i.pravatar.cc/50?u=19'}, 
    comment: 'Really cool perspective here, it makes the whole post stand out', 
    createdAt: '4h ago' 
  },
  { 
    id: '5', 
    userId: '5',
    postId: '4',
    user: { id: '5', name: 'Jane Urban', image: 'https://i.pravatar.cc/50?u=7'}, 
    comment: 'This is the kind of post that actually makes you stop and look', 
    createdAt: '5h ago' 
  },
]