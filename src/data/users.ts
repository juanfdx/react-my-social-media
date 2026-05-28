
export interface User {
  id: string;
  name: string;
  email: string;
  image?: string | null;
  latestActivity?: string | null;
  latestActivityAt?: string | null;
}


export const users: User[] = [
  { id: '1', name: 'John Doe', email: 'johndoe@me.com', image: 'https://i.pravatar.cc/50?u=2', latestActivity: 'commented on a post', latestActivityAt: '1h ago' },
  { id: '2', name: 'Mark Kay', email: 'markkay@me.com', image: null, latestActivity: 'liked a post', latestActivityAt: '2h ago' },
  { id: '3', name: 'Susan Smith', email: 'susan@me.com', image: 'https://i.pravatar.cc/50?u=10', latestActivity: 'shared a post', latestActivityAt: '3h ago' },
  { id: '4', name: 'Edu Lopez', email: 'edulopez@me.com', image: 'https://i.pravatar.cc/50?u=19', latestActivity: 'commented on a post', latestActivityAt: '4h ago' },
  { id: '5', name: 'Jane Urban', email: 'janeurban@me.com', image: 'https://i.pravatar.cc/50?u=7', latestActivity: null, latestActivityAt: null },
];