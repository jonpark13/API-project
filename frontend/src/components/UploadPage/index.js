import React, {useEffect, useState} from 'react'
import * as sessionActions from '../../store/session'
import * as songsActions from '../../store/songs'
import * as playlistActions from '../../store/playlists'
import {useDispatch, useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import UploadFormPage from './UploadForm'
import Dropdown from '../Dropdown'
import MiniNav from '../MiniNav'
import './UploadPage.css'
import Playing from '../MusicPlayer/Playing'
import logo from '../../assets/images/VVlogo.png'

function UploadPage() {
    const dispatch = useDispatch();
    const songsList = useSelector(state => state.songs)
    const sessionUser = useSelector((state) => state.session.user);
    const playlist = useSelector(state => state.playlists)
    const [recCreated, setRecCreated] = useState(null)
    const imageList = songsList.Songs

    useEffect(() => {
        dispatch(sessionActions.refreshUser())
        dispatch(songsActions.songsGrab())
        dispatch(playlistActions.playlistsCurrGrab())
        dispatch(songsActions.userSongsGrab())
    }, [dispatch])

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('hit1')
    //     return dispatch(songsActions.deleteSong(10))
    //         .catch(async (res) => {
    //             const data = await res.json();
    //             console.log('data', data)
    //         });
    // };

    // const handleSubmit2 = (e) => {
    //     e.preventDefault();
    //     console.log('hit2')
    //     return dispatch(songsActions.editingSong({
    //         title:'afterEdit',
    //         description:'afterEdit',
    //         url:'afterEdit',
    //         imageUrl:'afterEdit',
    //         id: 11
    //     }))
    //         .catch(async (res) => {
    //             const data = await res.json();
    //             console.log('data', data)
    //         });
    // };

    // const handleSubmit3 = (e) => {
    //     e.preventDefault();
    //     console.log('hit3')
    //     return dispatch(playlistActions.createPlaylist({
    //         userId:sessionUser.id,
    //         name: 'testPLaylist',
    //         imageUrl: 'test'
    //     }))
    //         .catch(async (res) => {
    //             const data = await res.json();
    //             console.log('data', data)
    //         });
    // };

    // const handleSubmit4 = (e) => {
    //     e.preventDefault();
    //     console.log('hit4')
    //     return dispatch(playlistActions.addSongToPlaylist(5,4))
    //         .catch(async (res) => {
    //             const data = await res.json();
    //             console.log('data', data)
    //         });
    // };

    // const handleSubmit5 = (e) => {
    //     e.preventDefault();
    //     console.log('hit5')
    //     return dispatch(playlistActions.deletePlaylist(10))
    //         .catch(async (res) => {
    //             const data = await res.json();
    //         });
    // };

    return (
        <div className='uploadPage'>
            <div className='uploadContent'>
                <MiniNav/>

                <UploadFormPage setRecCreated={setRecCreated}/> 
                {
                !!recCreated && <div className='createdSong'>
                    <div className='createdDetailsList'>
                        <img className='createdPic'
                            src={
                                recCreated.previewImage || logo
                            }
                            onError={
                                (e) => {
                                    e.target.onError = "";
                                    e.target.src = logo;
                                    e.target.style.background = "linear-gradient(90deg, rgba(255, 247, 255, 1) 0%, rgba(118, 194, 210, 1) 100%)"
                                    return true;
                                }
                            }/>
                        <div className='createdTextCont'>
                            <div className='createdTitleText'>
                                {
                                recCreated.title
                            }</div>
                            <div className='createdArtistText'>
                                {
                                recCreated.User.username
                            }</div>
                            <div className='createdDescText'>{recCreated.description || ''}</div>
                            <div className='createdUplText'>Upload complete!</div>
                        </div>
                    </div>
                </div>
            } </div>
        </div>
    );
}

export default UploadPage;
