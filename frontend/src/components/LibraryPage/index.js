import React, { useEffect, useState } from 'react'
import * as sessionActions from '../../store/session'
import * as songsActions from '../../store/songs'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import LoginFormModal from '../LoginFormModal';
import SongSlidingGallery from '../SongSlidingGallery'
import './LibraryPage.css'

function LibraryPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const songsList = useSelector(state => state.songs)

    useEffect(() => {
        dispatch(songsActions.songsGrab())
        dispatch(sessionActions.refreshUser())
    },[])

    if (sessionUser) return(<Redirect to="/login" />)

    return (
        <>
        <div className='mainPage'>
            Playlists
        </div>
        <div>
            {JSON.stringify(songsList)}
        </div>
        </>
    );
}

export default LibraryPage;