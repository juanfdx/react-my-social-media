import './Home.css'
import { useSessionStore } from '../../../stores/useSessionStore';
import { StorySlider } from '../../../components/stories/StorySlider/StorySlider'
import { PostList } from '../../../components/posts/PostList/PostList'


export const Home = () => {

  const setUser = useSessionStore((s) => s.setUser);

  setUser({
    id: '1',
    name: 'John Doe',
    email: 'johndoe@me.com',
    avatarUrl: 'https://i.pravatar.cc/50?u=2',
  });

  return (
    <div className='home'>
      <StorySlider />

      <PostList />
    </div>
    
  )
}