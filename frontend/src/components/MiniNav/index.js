import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './MiniNav.css'

function MiniNav({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);
  let sessionLinks
  let libraryBut, uploadBut
  

  return (
    <div className='miniNavBar'>
      <div className='miniNavContent'>
        <div className='navListLinks'>
        <NavLink exact to="/upload" className={isActive => isActive ? 'miniNavBut sel' : 'miniNavBut unsel'}>Upload</NavLink>
        <NavLink exact to="/your/tracks" className={isActive => isActive ? 'miniNavBut sel' : 'miniNavBut unsel'}>Your tracks</NavLink>
        <NavLink exact to="/your/playlists" className={isActive => isActive ? 'miniNavBut sel' : 'miniNavBut unsel'}>Your playlists</NavLink>
        </div>
      </div>
    </div>
  )
}

export default MiniNav;