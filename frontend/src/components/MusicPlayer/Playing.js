import React, { useState, useEffect } from "react";
import logo from '../../assets/images/VVlogo.png'

function Playing({ song }) {
  return (
    <div className='playDetailsList'>
        <img className='tPic' src={song.previewImage || logo} onError={(e) => {
                    e.target.onError = "";
                    e.target.src = logo;
                    e.target.style.background = "linear-gradient(90deg, rgba(255, 247, 255, 1) 0%, rgba(118, 194, 210, 1) 100%)"
                    return true;
                }}/>
        <div className='detailsTextCont'>
        <div className='titleText'>{song.title}</div>
        <div className='artistText'>{song.User.username}</div>
        </div>
    </div>
  );
}

export default Playing;