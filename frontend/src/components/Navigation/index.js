import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import Search from './Search'
import './Navigation.css'
import logo from '../../assets/images/VVlogo.png'

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    )
  } 
  else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup"><button className='createAcc'>Create account</button></NavLink>
      </>
    )
  }

  return (
    <div className='navBar'>
    <div>
      <ul className='navList'>
        <img src={logo} className='logo'></img>
        <li>
          <NavLink exact to="/"><button className='navBut'>Home</button></NavLink>
        </li>
        <li className='navBut'>
          TEST
        </li>
      </ul>
    </div>
    <Search />
    <div>
      {isLoaded && sessionLinks}
    </div>
    </div>
  )
}

export default Navigation;