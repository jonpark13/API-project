import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import Search from './Search'
import './Navigation.css'
import logo from '../../assets/images/VVlogo.png'
import LoginDemo from '../LoginFormModal/LoginDemo';
import CreateAccountModal from '../CreateAccountModal';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks
  let libraryBut, uploadBut
  if (sessionUser.id) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    )
    libraryBut = (
      <>
        <div className='navBut light'>
          <NavLink exact to="/library" className={isActive => isActive ? 'navBut dark' : 'navBut light'}>Library</NavLink>
        </div>
      </>
    )
    uploadBut = (
      <>
        <div className='navBut light'>
          <NavLink to="/upload" className={isActive => isActive ? 'navBut dark' : 'navBut light'}>Upload</NavLink>
        </div>
      </>
    )
  }
  else {
    sessionLinks = (
      <>
        <LoginFormModal name={'Sign in'} css={'signInCond'} />
        <CreateAccountModal name={'Create Account'} css={'createAccCond'}/>
      </>
    )
    libraryBut = (
      <>

        <LoginFormModal name={'Library'} css={'uploadNavBar'} />

      </>
    )
    uploadBut = (
      <>

        <LoginFormModal name={'Upload'} css={'uploadNavBar'} />

      </>
    )
  }

  return (
    <div className='navBar'>
      <div className='navContent'>
        <div className='navListLinks'>
          <img src={logo} className='logo'></img>
          <NavLink exact to="/discover" className={isActive => isActive ? 'navBut dark' : 'navBut light'}>Home</NavLink>
          {isLoaded && libraryBut}
        </div>
        {/* <Search /> */}
        <div className='navListSessions'>
          {isLoaded && sessionLinks}
          {isLoaded && uploadBut}
        </div>
      </div>
    </div>
  )
}

export default Navigation;