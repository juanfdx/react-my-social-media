import './LinkBtn.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';


interface Props {
  iconName: string;
  label: string;
  onClick?: () => void
}

export const LinkBtn = ({ iconName , label, onClick }: Props) => {

  const icon = (iconName: string) => {
    switch (iconName) {
      case 'like':
        return <FavoriteBorderIcon style={{ fontSize: '22px' }} />
      case 'liked':
        return <FavoriteIcon style={{ fontSize: '22px' }} />
      case 'comment':
        return <TextsmsOutlinedIcon style={{ fontSize: '22px' }} />
      case 'share':
        return <ShareOutlinedIcon style={{ fontSize: '22px' }} />
      default:
        return iconName
    }
  }



  return (
    <button className='link-btn' onClick={ onClick }>
      {icon(iconName)}
      <span className='link-btn__label'>{label}</span>
    </button>
  )
}