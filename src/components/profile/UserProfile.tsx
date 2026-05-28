import './UserProfile.css'
import { users } from '../../data/users'
import background from '../../assets/images/background/background-2.webp'
import placeholder from '../../assets/images/placeholders/avatar.webp'
import { useSessionStore } from '../../stores/useSessionStore'

interface Props {
 userId: string 
}


export const UserProfile = ({ userId }: Props) => {

  const loggedUser = useSessionStore((s) => s.user);
  const user = users.find(u => u.id === userId);

  if (!user) return null

  
  return (
    <div className='user-profile'>
      <div className='user-profile__container'>
        {/* HERO */}
        <div className='user-profile__hero'>
          <img className='user-profile__hero-img' src={background} alt="hero" />

          <div className='user-profile__image-wrapper'>
            <img className='user-profile__img' src={user.image || placeholder} alt={user.name} />
          </div>
        </div>

        {/* INFO */}
        <div className='user-profile__info'>
          <h1 className='user-profile__name'>{user.name}</h1>  
          <p className='user-profile__email'>{user.email}</p>  

          <button className='user-profile__btn'>
            {loggedUser?.id === user.id ? 'Edit Profile' : 'Follow'}
          </button>     
        </div>

      </div>
    </div>
  )
}