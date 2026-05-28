import './Profile.css'
import { UserProfile } from '../../../components/profile/UserProfile';
import { useLoaderData } from 'react-router-dom';
import { PostList } from '../../../components/posts/PostList/PostList';


export const Profile = () => {

  const { posts, userId } = useLoaderData();


  return (
    <div className='profile'>
      <UserProfile userId={userId} />

      <PostList posts={posts} />
    </div>
  )
}