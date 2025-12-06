import React, {useState} from 'react'
import { useAppContext } from '../Context/AppContext.jsx';
import { assets } from '../assets/assets.js';

const SideBar = () => {

const {chats, setSelectedChat, theme, setTheme, user} = useAppContext();
const [search, setSearch] = useState('');

  return (

    <div className='flex flex-col h-screen min-w-72 p-5 dark:bg-gradient-to-b from-[#242124] to-[#000000]/30 
    border-r border-[#80609F]/30 backdrop-blur-3xl transition-all duration-500 max-md:absolute left-0 z-1'>

      {/* logo */}
      <img src={theme === 'dark' ? assets.logo_full : assets.logo_full_dark} alt="logo"
       className='w-35 max-w-48'/>

       {/* new chat button */}
     <button className='flex justify-center items-center w-full py-2 mt-10 text-white bg-gradient-to-r
      from-[#A456F7] to-[#3D81F6] text-sm rounded-md cursor-pointer'>
        <span className='mr-2 text-xl'>+</span>New Chat
     </button>

     {/* search conversation */}

     <div className='flex items-center gap-2 p-3 mt-4 border border-gray-400
      dark:border-white/20 rounded-md'>
        <img src={assets.search_icon} alt="search" className='w-4 not-dark:invert'/>
        <input type="text" placeholder='Search Conversations'
         className='outline-none text-xs placeholder:text-gray-400'
         value={search}
         onChange={(e) => setSearch(e.target.value)}
         />

     </div>

    {/* recent chats */}
    {chats.length > 0 &&
    <p>Recent Chats</p>}

    <div className='flex-1 overflow-y-scroll mt-3 text-sm space-y-3'>
        {
           chats
          .filter((chat) => {
            const firstContent = chat.messages?.[0]?.content ?? '';
            const name = chat.name ?? '';
            return (
              firstContent.toLowerCase().includes(search.toLowerCase()) ||
              name.toLowerCase().includes(search.toLowerCase())
            );
          })
          .map((chat) => (
                <div key={chat._id}
                    onClick={() => setSelectedChat(chat)}
                    className='p-2 px-4 dark:bg-[#57317C]/10 border border-gray-300 dark:border-[#80609F]/15 rounded-md 
                    cursor-pointer flex justify-between group'>
                    <div>
                        <p className='truncate w-full'>
                          {chat.messages?.length > 0 ? chat.messages[0].content.slice(0, 32) : chat.name}
                        </p>
                        <p className='text-xs text-gray-500 dark:text-[#B1A6C0]'>
                            {chat.updatedAt}
                        </p>
                    </div>
                    <img src={assets.bin_icon} alt="bin" className='hidden group-hover:block w-4 cursor-pointer not dark:invert'/>
                 </div>))
                                }
    </div>

    </div>
  )
}

export default SideBar
