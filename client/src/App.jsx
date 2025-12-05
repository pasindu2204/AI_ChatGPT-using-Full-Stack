import React from 'react'
import SideBar from './Components/SideBar'
import { Route, Routes } from 'react-router-dom'
import ChatBox from './Components/ChatBox'
import Credit from './Pages/Credit.jsx'
import Community from './Pages/Community.jsx'

const App = () => {
  return (
    <>
    <div className='dark:bg-gradient-to-b from-[#242124] to-[#000000] dark:text-white'>

    <div className='flex h-screen w-screen'>
      <SideBar />
      <Routes>
        <Route path='/' element={<ChatBox />} />
        <Route path='/credit' element={<Credit />} />
        <Route path='/community' element={<Community />} />
      </Routes>
    </div>
      </div>
    </>
  )
}

export default App
