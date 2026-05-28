import './Navbar.css'
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useSessionStore } from '../../../stores/useSessionStore';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { UserProfileBadge } from '../../ui/UserProfileBadge/UserProfileBadge';
import { ToggleThemeBtn } from '../../ui/ToggleThemeBtn/ToggleThemeBtn';
import { Link, useNavigate } from 'react-router-dom';


export const Navbar = () => {

  const user = useSessionStore((s) => s.user);

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setOpen(prev => !prev);


  // close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);



  return (
    <nav className="navbar">

      <ToggleThemeBtn />
      
      <button className='navbar__btn navbar__btn--notification'>
        <EmailOutlinedIcon />
      </button>

      <button className='navbar__btn navbar__btn--notification'>
        <NotificationsNoneOutlinedIcon />
      </button>

      <div className="navbar__separator"></div>

      {/* PROFILE DROPDOWN WRAPPER */}
      <div className="navbar__profile" ref={menuRef}>
        <button className="navbar__btn" onClick={toggleMenu}>
          <UserProfileBadge name={user?.name || ''} avatarUrl={user?.avatarUrl || ''} big isInHeader />
        </button>

        {open && (
          <div className="navbar__dropdown">
            <button 
              className="dropdown__item" 
              onClick={() => {setOpen(false); navigate(`/profile/${user?.id}`)}}
            >
              Profile
            </button>
            <button className="dropdown__item" onClick={() => setOpen(false)}>
              Settings
            </button>
            <Link to="/auth/login" className="dropdown__item">Logout</Link>
          </div>
        )}
      </div>
     
    </nav>
  )
}