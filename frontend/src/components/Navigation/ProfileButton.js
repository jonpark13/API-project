import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Redirect, useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory()
  const [showMenu, setShowMenu] = useState(false);
  
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

  const logout = async (e) => {
    e.preventDefault();
    await dispatch(sessionActions.logoutUser());
    history.replace('/')
  };

  return (
    <>
      <button onClick={openMenu}>
        <i className="fa-solid fa-user-astronaut" />
      </button>
      <div className='navBut'>
        {user.firstName}
      </div>
      <div>

      </div>
      {showMenu && (
        <div>

            <button onClick={logout}>Log Out</button>

        </div>
      )}
    </>
  );
}

export default ProfileButton;