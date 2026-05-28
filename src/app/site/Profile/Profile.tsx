import { useSessionStore } from '../../../stores/useSessionStore';
import './Profile.css'


export const Profile = () => {

  const user = useSessionStore((s) => s.user);
  console.log(user);
  
  
  return (
    <div className='profile'>
      Profile
    </div>
  )
}