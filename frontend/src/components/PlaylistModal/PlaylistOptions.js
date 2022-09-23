import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function PlaylistOptions() {
  const playlists = useSelector(state => state.playlists)
  let lists = playlists.Playlist

  return (
    <div className="playlistModal">
      {JSON.stringify(playlists)}
    </div>
  );
}

export default PlaylistOptions;


// {Object.keys(list).map((e, i) => (
//   <div className="playlistItem" key={i}>
//   {/* <img src={e.previewImage} alt={e.title}/> */}
//   <div className='mimgCont'>
//       <img className='mimgO' src={`https://picsum.photos/seed/${i}/173`} alt='test' />
//   </div>
//   <div className='titleText'>{list[e].name}</div>
//   <div className='artistText'>{list[e].userId}</div>
// <button className="saveB">Add to Playlist</button>
// </div>
// ))}