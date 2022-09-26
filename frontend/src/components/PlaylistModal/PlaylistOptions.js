import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as playlistActions from '../../store/playlists'

function PlaylistOptions({song}) {
  const dispatch = useDispatch()
  const [active, setActive] = useState(true)
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const playlists = useSelector(state => state.playlists)
  const sessionUser = useSelector(state => state.user)
  let lists = playlists.Playlist

  if(!playlists.Playlists) setActive(false)

  const handleAddTrack = (e) => {
        return dispatch(playlistActions.addSongToPlaylist(e, song.id))

    };
  
  return (<>
    <div className="playlistModal">
      <div className="playNavCont">

        <button autoFocus className="playSel">Add to playlist</button>
      </div>
      <div className="plCont">
      {Object.keys(playlists.Playlists).map((e, i) => (
        <div className='plLineContainer'>
            {/* <img src={e.previewImage} alt={e.title}/> */}
            <div className='plImgCont'>
            <img className='plImg' src={playlists.Playlists[e].imageUrl} alt='test' />
            </div>
            <div className='plDetails'>
            <div className='plTitle'>{playlists.Playlists[e].name}</div>
            <button className="addTrackToPl" onClick={() => handleAddTrack(playlists.Playlists[e].id)}>Add to playlist</button>
            </div>
        </div>))}
      </div>
    </div></>
  );
}

export default PlaylistOptions;