import './UserProfileBadge.css'
import { avatarColor, initials } from '../../../utils/functions';

interface Props {
  name: string;
  avatarUrl: string;
  timestamp?: string
  big?: boolean
  indicator?: boolean
  isInHeader?: boolean
};

export function UserProfileBadge({ 
  name, 
  avatarUrl, 
  timestamp,
  big = false, 
  indicator = false, 
  isInHeader = false 
}: Props) {

  // I use avatarUrl prop to check if the user has a profile picture

  return (
    <div className={`user-profile-badge ${big ? 'user-profile-badge--big' : ''}`}>
      {!avatarUrl ? (
        <div 
          className={`user-profile-badge__initials ${big ? 'user-profile-badge__initials--big' : ''}`}
          style={{ backgroundColor: `${avatarColor(name)}` }}
        >
          {initials(name)}
        </div>
      ) : (
        <img
          src={avatarUrl}
          alt={name}
          className={`user-profile-badge__img ${big ? 'user-profile-badge__img--big' : ''}`}
        />
      )}
      {indicator && <div className="user-profile-badge__indicator"></div>}
      <div className="user-profile-badge__info">
        <span className={`
          user-profile-badge__name ${big ? 'user-profile-badge__name--big' : ''}
          ${isInHeader ? 'user-profile-badge__name--in-header' : ''}
        `}>
          {name}
        </span>
        {timestamp && <span className="user-profile-badge__timestamp">{timestamp}</span>}
      </div>
    </div>
  );
}