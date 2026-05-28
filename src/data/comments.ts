export interface Comment {
  id: string;
  userId: string;
  postId: string;
  comment: string;
  createdAt: string;
}



export const comments: Comment [] = [
  { 
    id: '1', 
    userId: '1',
    postId: '1',
    comment: 'Honestly this is so well done, really impressive work here', 
    createdAt: '1h ago' 
  },
  { 
    id: '2', 
    userId: '2',
    postId: '1',
    comment: 'This is super inspiring, love the creativity behind it all', 
    createdAt: '2h ago' 
  },
  { 
    id: '3', 
    userId: '3',
    postId: '4',
    comment: 'Such a strong visual, everything fits together perfectly here', 
    createdAt: '3h ago' 
  },
  { 
    id: '4', 
    userId: '4',
    postId: '4',
    comment: 'Really cool perspective here, it makes the whole post stand out', 
    createdAt: '4h ago' 
  },
  { 
    id: '5', 
    userId: '5',
    postId: '4',
    comment: 'This is the kind of post that actually makes you stop and look', 
    createdAt: '5h ago' 
  },
    { 
    id: '6', 
    userId: '5',
    postId: '2',
    comment: 'This shot is absolutely stunning and feels like it captures both the intensity and beauty of mountain biking in winter conditions. The two riders are pushing through snow-covered trails with incredible focus and determination, showing real skill as they navigate the slippery terrain and steep sections. The snowy landscape adds a cinematic quality to the whole scene, making it look like a moment frozen in time.', 
    createdAt: '2h ago' 
  },
]