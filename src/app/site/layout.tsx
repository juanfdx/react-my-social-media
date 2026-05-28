import './layout.css'
import { Outlet } from 'react-router-dom'

import { Header } from '../../components/shared/Header/Header'
import { LeftBar } from '../../components/shared/LeftBar/LeftBar'
import { RightBar } from '../../components/shared/RightBar/RightBar'



export const SiteLayout = () => {

  return (
    <div className="site-layout">

      <Header />
      
      <div className="site-layout__container">   
        <div className='site-layout__wrapper'>

          <LeftBar />

          <main className="site-layout__main">
            <Outlet />
          </main>

          <RightBar />
          
        </div>
      </div>
      
    </div>
  )
}