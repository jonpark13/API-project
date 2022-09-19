import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import Search from './Search'
import './Navigation.css'

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
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    )
  }

  return (
    <div className='navBar'>
    <div>
      <ul className='navList'>
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