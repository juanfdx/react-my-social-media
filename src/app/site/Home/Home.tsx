import './Home.css'
import { StorySlider } from '../../../components/stories/StorySlider/StorySlider'
import { PostList } from '../../../components/posts/PostList/PostList'
import { useLoaderData } from 'react-router-dom';


export const Home = () => {

  const { posts } = useLoaderData();


  return (
    <div className='home'>
      <StorySlider />

      <PostList posts={posts} />
    </div>
    
  )
}