import React, { useEffect, useState } from 'react'
import * as sessionActions from '../../store/session'
import * as songsActions from '../../store/songs'
import * as playlistActions from '../../store/playlists'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import UploadFormPage from './UploadForm'
import Dropdown from '../Dropdown'
import './UserTracks.css'
import MiniNav from '../MiniNav'

function UserTracks() {
    const dispatch = useDispatch();
    const songsList = useSelector(state => state.songs)
    const sessionUser = useSelector((state) => state.session.user);
    const playlist = useSelector(state => state.playlists)
    const imageList = songsList.Songs

    useEffect(() => {
        dispatch(songsActions.songsGrab())
        dispatch(playlistActions.playlistsCurrGrab())
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('hit1')
        return dispatch(songsActions.deleteSong(10))
            .catch(async (res) => {
                const data = await res.json();
                console.log('data', data)
            });
    };

    return (
        <div className='uploadPage'>
            <div className='uploadContent'>
            <MiniNav />
            <div className='trackContainer'>

            </div>

            </div>
        </div>
    );
}

export default UserTracks;