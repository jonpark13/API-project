import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as playlistActions from '../../store/playlists'

function PlaylistOptions({song}) {
    const dispatch = useDispatch()
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const playlists = useSelector(state => state.playlists)
    const sessionUser = useSelector(state => state.user)
    let lists = playlists.Playlist

    const handleAddTrack = () => {
        return dispatch(playlistActions.addSongToPlaylist(playlists.Playlists, song.id)).catch(async (res) => {
            const data = await res.json();
        });
    };

    const handleCreatePlaylist = (e) => {
        e.preventDefault();
        return dispatch(playlistActions.createPlaylist({userId: sessionUser, name, imageUrl})).then( async res => {
          await dispatch(playlistActions.addSongToPlaylist(res.id, song.id))
        }).catch(async (res) => {
            const data = await res.json();
            console.log(data, 'data')
        });
    };

    return (
        <div className="playlistModal">
            <div className="playNavCont">

                <button className="playSel">
                    Create a playlist</button>
            </div>
            <div className="plCont">
                <div className="createFormCont">
                    <div className="editImgCont"><img className="editImg"
                            src={imageUrl}/></div>
                    <form onSubmit={handleCreatePlaylist}
                        className='createPlaylistForm'>
                        <div>Title</div>
                        <input className="errorModalCont" type="text" placeholder="Name"
                            value={name}
                            onChange={
                                (e) => setName(e.target.value)
                            }
                            required/>
                        <div>Image Url</div>
                        <input className="errorModalCont" type="text" placeholder="Image Url"
                            value={imageUrl}
                            onChange={
                                (e) => setImageUrl(e.target.value)
                            }/>
                        <button className="createpl" type='submit'>Save</button>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default PlaylistOptions;
