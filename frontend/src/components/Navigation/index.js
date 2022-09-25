import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import Search from './Search'
import './Navigation.css'
import logo from '../../assets/images/VVlogo.png'
import LoginDemo from '../LoginFormModal/LoginDemo';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks
  let libraryBut, uploadBut
  if (sessionUser.id) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    )
    libraryBut = (
      <>
        <li className='navBut'>
          <NavLink exact to="/library" className='navBut'>Library</NavLink>
        </li>
      </>
    )
    uploadBut = (
      <>
        <li className='navBut'>
        <NavLink to="/upload" className='navBut'>Upload</NavLink>
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
    uploadBut = (
      <>
        <li className='navBut'>
        <LoginFormModal name={'Upload'}/>
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
          {isLoaded && uploadBut}
          <LoginDemo css={'navDemoBut'}/>
        <div>
          {isLoaded && sessionLinks}
        </div>
      </div>
    </div>
  )
}

export default Navigation;