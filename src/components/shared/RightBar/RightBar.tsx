import './RightBar.css'
// data
import { users } from '../../../data/users'
import { UserProfileBadge } from '../../ui/UserProfileBadge/UserProfileBadge'



export const RightBar = () => {

  return (
    <div className='right-bar'>
      <div className='right-bar__container'>

        {/* Suggestions */}
        <div className='right-bar__wrapper'>
          <h3 className='left-bar__title'>Suggestions for you</h3>
          
          {users.slice(0, 3).map(friend => (
              <div className='right-bar__item' key={friend.id}>
                <UserProfileBadge name={friend.name} avatarUrl={friend.image || ''} />                

                <div className='right-bar__item-actions'>
                  <button className='right-bar__item-btn right-bar__item-btn--follow'>Follow</button>
                  <button className='right-bar__item-btn right-bar__item-btn--dismiss'>Dismiss</button>
                </div>
              </div>
            ))}
        </div>
            
        {/* Latest Activity */}
        <div className='right-bar__wrapper'>
          <h3 className='left-bar__title'>Latest Activity</h3>
          
          {users.map(friend => {

            if (!friend.latestActivity || !friend.latestActivityAt) return

            return (
              <div className='right-bar__item' key={friend.id}>
                <div className='right-bar__item-user'>
                  <UserProfileBadge name={friend.name} avatarUrl={friend.image || ''} />                
                  <span className='right-bar__item-latest-activity'>{friend.latestActivity}</span>
                </div>

                <div className='right-bar__item-actions'>
                  <span className='right-bar__item-latest-activity-time'>{friend.latestActivityAt}</span>
                </div>
              </div>)
            })}            
        </div>
        
        {/* Online Friends */}
        <div className='right-bar__wrapper'>
          <h3 className='left-bar__title'>Online Friends</h3>
          
          {users.map(friend => (
              <div className='right-bar__item' key={friend.id}>
                <UserProfileBadge name={friend.name} avatarUrl={friend.image || ''} indicator />
              </div>
            ))}
        </div>

      </div>
      
    </div>
  )
}