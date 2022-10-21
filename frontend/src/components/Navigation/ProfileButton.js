import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Redirect, useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory()
  const [showMenu, setShowMenu] = useState(false);
  const onClick = () => setShowMenu(!showMenu);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    console.log('Logout pressed')
    e.preventDefault();
    dispatch(sessionActions.logoutUser())
    .then(() => history.replace('/'))
  };

  return (
    <>
      <button onClick={onClick}>
        <i className="fa-solid fa-user-astronaut icon" />
      </button>
      <div className={`navBut${showMenu ? ' drk' : ''}`}>
        {user.firstName}
      </div>
      <div className={`menu ${showMenu ? 'active' : 'inactive'}`}>
          <button className="log" onClick={logout}>Log Out</button>
      </div>
    </>
  );
}

export default ProfileButton;