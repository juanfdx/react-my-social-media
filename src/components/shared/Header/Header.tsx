import './Header.css'
import { Navbar } from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
import { FormSearch } from '../../form/FormSearch/FormSearch'


export const Header = () => {
  
  return (
    <header className='header'>
      <div className='header__container'>

        <Link to="/" className='header__h1'>socialNet</Link>

        <div className='header__search'>
          <FormSearch name='search' />
        </div>

        <Navbar />

      </div>
    </header>
  )
}