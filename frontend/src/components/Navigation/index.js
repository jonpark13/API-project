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
  let libraryBut
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    )
    libraryBut = (
      <>
        <li className='navBut'>
          <NavLink exact to="/library" onClick={() => console.log('clicked library')} className='navBut'>Library</NavLink>
        </li>
      </>
    )
  } 
  else {
    sessionLinks = (
      <>
        <LoginFormModal name={'Sign in'}/>
        <NavLink to="/signup"><button className='createAcc'>Create account</button></NavLink>
      </>
    )
    libraryBut = (
      <>
        <li className='navBut'>
          <LoginFormModal name={'Library'}/>
        </li>
      </>
    )
  }

  return (
    <div className='navBar'>
      <div className='navContent'>
          <ul className='navList'>
            <img src={logo} className='logo'></img>
            <li>
              <NavLink exact to="/" className='navBut'>Home</NavLink>
            </li>
            <li className='navBut'>
              TEST
            </li>
            {isLoaded && libraryBut}
          </ul>
          <Search />
        <div>
          {isLoaded && sessionLinks}
        </div>
      </div>
    </div>
  )
}

export default Navigation;