import React, { useEffect, useState } from 'react'
import * as sessionActions from '../../store/session'
import * as songsActions from '../../store/songs'
import * as playlistActions from '../../store/playlists'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import LoginFormModal from '../LoginFormModal';
import Gallery from '../Gallery'
import './LibraryPage.css'

function LibraryPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const songsList = useSelector(state => state.songs)
    const playlists = useSelector(state => state.playlists)

    useEffect(() => {
        dispatch(songsActions.songsGrab())
        dispatch(sessionActions.refreshUser())
        dispatch(playlistActions.playlistsCurrGrab())
    },[])

    return (
        <>
        <div className='mainPage'>
            Playlists
        </div>
        <div>
            {JSON.stringify(sessionUser)}
        </div>
        <div>
            
            <Gallery songs={songsList.Songs} />
            
        </div>
        <div>
            {JSON.stringify(playlists)}
        </div>
        </>
    );
}

export default LibraryPage;