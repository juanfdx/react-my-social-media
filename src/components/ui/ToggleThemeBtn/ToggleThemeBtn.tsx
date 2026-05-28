import './ToggleThemeBtn.css';
// COMPONENTS
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { useThemeStore } from '../../../stores/useThemeStore';



export const ToggleThemeBtn = () => {

  const isDark = useThemeStore((s) => s.isDark);
  const toggleTheme = useThemeStore((s) => s.toggleTheme);


  return (
    <button className='toggle-theme-button' onClick={toggleTheme}>
      {isDark ? (
        <WbSunnyOutlinedIcon className='toggle-theme-button__icon' />
      ) : (
        <DarkModeOutlinedIcon className='toggle-theme-button__icon' />
      )}
    </button>
  )
}