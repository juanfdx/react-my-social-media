import relax from '../assets/images/stories/relax-in-nature.webp'
import mountainWoman from '../assets/images/stories/mountains-woman.webp'
import snowCouple from '../assets/images/stories/snow-couple.webp'
import snowBiking from '../assets/images/stories/snow-biking.webp'
import alpsMountain from '../assets/images/stories/alps-photo.webp'
import type { User } from './users'

export interface Post {
  id: string
  comment: string
  userId: string
  user: User
  image: string 
  createdAt: string
}
// TODO: trae al user de la api

export const posts: Post [] = [
  { 
    id: '1', 
    comment: 'Honestly this is so well done, really impressive work here', 
    userId: '1',
    user: {
      id: '1', 
      name: 'John Doe',
      image: 'https://i.pravatar.cc/50?u=2'
    }, 
    image: snowCouple, 
    createdAt: '1h ago' 
  },
  { 
    id: '2', 
    comment: 'This is super inspiring, love the creativity behind it all',
    userId: '2', 
    user: { 
      id: '2', 
      name: 'Mark Kay',
      image: null
    }, 
    image: snowBiking, 
    createdAt: '2h ago' 
  },
  { 
    id: '3', 
    comment: 'Such a strong visual, everything fits together perfectly here', 
    userId: '3',
    user: { 
      id: '3', 
      name: 'Susan Smith',
      image: 'https://i.pravatar.cc/50?u=10'
    }, 
    image: relax, 
    createdAt: '3h ago' 
  },
  { 
    id: '4', 
    comment: 'Really cool perspective here, it makes the whole post stand out', 
    userId: '4',
    user: { 
      id: '4', 
      name: 'Edu Lopez',
      image: 'https://i.pravatar.cc/50?u=19'
    }, 
    image: alpsMountain, 
    createdAt: '4h ago' 
  },
  { 
    id: '5', 
    comment: 'This is the kind of post that actually makes you stop and look', 
    userId: '5',
    user: { 
      id: '5', 
      name: 'Jane Urban',
      image: 'https://i.pravatar.cc/50?u=7'
    }, 
    image: mountainWoman, 
    createdAt: '5h ago' 
  },
]