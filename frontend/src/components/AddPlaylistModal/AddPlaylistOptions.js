import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import logo from '../../assets/images/VVlogo.png'
import * as playlistActions from '../../store/playlists'

function PlaylistOptions({song, showModal, setShowModal}) {
    const dispatch = useDispatch()
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [errors, setErrors] = useState({});
    const playlists = useSelector(state => state.playlists)
    const sessionUser = useSelector(state => state.user)
    let lists = playlists.Playlist

    // const handleAddTrack = () => {
    //     console.log('hit')
    //     return dispatch(playlistActions.addSongToPlaylist(playlists.Playlists, song.id)).catch(async (res) => {
    //         const data = await res.json();
    //     });
    // };

    const handleCreatePlaylist = (e) => {

        e.preventDefault()
        dispatch(playlistActions.createPlaylist({userId: sessionUser, name, imageUrl})).then((res) => {
            dispatch(playlistActions.addSongToPlaylist(res.id, song.id))
        })
        .then(() => setShowModal(false))
        .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors)
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
                            src={imageUrl || logo}/></div>
                    <form onSubmit={handleCreatePlaylist}
                        className='createPlaylistForm'>
                        <div>Playlist title</div>
                        <input className="errorModalCont" type="text" placeholder="Name"
                            value={name}
                            onChange={
                                (e) => setName(e.target.value)
                        }/>
                        <div className="errorModalText">{Object.keys(errors).includes('name') && errors['name']}</div>
                        <div>Playlist url</div>
                        <input className="errorModalCont" type="text" placeholder="Image Url"
                            value={imageUrl}
                            onChange={
                                (e) => setImageUrl(e.target.value)
                            }/>
                        <div className="saveAlign">
                            <button className="createpl" type='submit'>Save</button>    
                            <button className="cancelpl" onClick={(e) => setShowModal(false)}>Cancel </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default PlaylistOptions;
