import './LeftBar.css'
import { useSessionStore } from '../../../stores/useSessionStore';
// data
import { menuItems, others, shortCuts } from '../../../data/menu'
import { UserProfileBadge } from '../../ui/UserProfileBadge/UserProfileBadge'
import { useNavigate } from 'react-router-dom';



export const LeftBar = () => {

  const navigate = useNavigate();
  const user = useSessionStore((s) => s.user);
  
  
  return (
    <div className='left-bar'>
      <div className='left-bar__container'>

        <button 
          className='left-bar__user'
          onClick={() => navigate(`/profile/${user?.id}`)}
        >
          <UserProfileBadge 
            name={user?.name || ''}
            avatarUrl={user?.avatarUrl || ''} 
            big
          />
        </button>
        <div className='left-bar__separator'></div>
        
        {/* MENU ITEMS */}
        {menuItems.map((item) => (

          <div className='left-bar__item' key={item.id}>
            <img 
              className='left-bar__item-img' 
              src={item.image} 
              alt={item.label} 
            />
            <span className='left-bar__item-label'>{item.label}</span>
          </div>

        ))}

        <div className='left-bar__separator'></div>
        
        <h3 className='left-bar__title'>Your Shortcuts</h3>
        {/* SHORTCUTS */}
        {shortCuts.map((item) => (

          <div className='left-bar__item' key={item.id}>
            <img className='left-bar__item-img' src={item.image} alt={item.label} />
            <span className='left-bar__item-label'>{item.label}</span>
          </div>

        ))}

        <div className='left-bar__separator'></div>

        <h3 className='left-bar__title'>Others</h3>
        {/* OTHERS */}
        {others.map((item) => (

          <div className='left-bar__item' key={item.id}>
            <img className='left-bar__item-img' src={item.image} alt={item.label} />
            <span className='left-bar__item-label'>{item.label}</span>
          </div>

        ))}

      </div>
    </div>
  )
}