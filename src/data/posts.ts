import relax from '../assets/images/stories/relax-in-nature.webp'
import mountainWoman from '../assets/images/stories/mountains-woman.webp'
import snowCouple from '../assets/images/stories/snow-couple.webp'
import snowBiking from '../assets/images/stories/snow-biking.webp'
import alpsMountain from '../assets/images/stories/alps-photo.webp'

export interface Post {
  id: string
  comment: string
  userId: string
  image: string 
  createdAt: string
}


export const posts: Post [] = [
  { 
    id: '1', 
    comment: 'Honestly this is so well done, really impressive work here', 
    userId: '1',
    image: snowCouple, 
    createdAt: '1h ago' 
  },
  { 
    id: '2', 
    comment: 'This is super inspiring, love the creativity behind it all',
    userId: '2', 
    image: snowBiking, 
    createdAt: '2h ago' 
  },
  { 
    id: '3', 
    comment: 'Such a strong visual, everything fits together perfectly here', 
    userId: '3',
    image: relax, 
    createdAt: '3h ago' 
  },
  { 
    id: '4', 
    comment: 'Really cool perspective here, it makes the whole post stand out', 
    userId: '4',
    image: alpsMountain, 
    createdAt: '4h ago' 
  },
  { 
    id: '5', 
    comment: 'This is the kind of post that actually makes you stop and look', 
    userId: '5',
    image: mountainWoman, 
    createdAt: '5h ago' 
  },
]