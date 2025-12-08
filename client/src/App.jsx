import React, {useState} from 'react'
import SideBar from './Components/SideBar'
import { Route, Routes, useLocation } from 'react-router-dom'
import ChatBox from './Components/ChatBox'
import Credit from './Pages/Credit.jsx'
import Community from './Pages/Community.jsx'
import { assets } from './assets/assets.js'
import './assets/prism.css'
import Loading from './Pages/Loading.jsx'

const App = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {pathname} = useLocation();

  if (pathname === '/loading') {
    return <Loading />;
  }

  return (
    <>
    {!isMenuOpen && <img onClick={() => setIsMenuOpen(true)} src={assets.menu_icon} alt="" className='w-8 h-8 
    absolute top-5 left-5 cursor-pointer z-10 md:hidden not-dark:invert' />}

    <div className='dark:bg-gradient-to-b from-[#242124] to-[#000000] dark:text-white'>

    <div className='flex h-screen w-screen'>
      <SideBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Routes>
        <Route path='/' element={<ChatBox />} />
        <Route path='/credits' element={<Credit />} />
        <Route path='/community' element={<Community />} />
      </Routes>
    </div>
      </div>
    </>
  )
}

export default App
