import React, { useEffect, useState } from 'react'
import * as sessionActions from '../../store/session'
import * as songsActions from '../../store/songs'
import * as playlistActions from '../../store/playlists'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import logo from '../../assets/images/VVlogo.png'
import LoginFormModal from '../LoginFormModal';
import Gallery from '../Gallery'
import MiniGallery from '../MiniGallery'
import './LibraryPage.css'

function LibraryPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const songsList = useSelector(state => state.songs)
    const playlists = useSelector(state => state.playlists)

    useEffect(() => {
        // dispatch(sessionActions.refreshUser())
        dispatch(songsActions.songsGrab())
        dispatch(playlistActions.playlistsCurrGrab())
        dispatch(songsActions.userSongsGrab())
    },[dispatch])

    return (
        <>
        <div className='libPage'>
            <div className='libContent'>
            <div className='libTitle'>Your Tracks and Playlists</div>
            <div className='textLine'>
            <div className='typeText'>Your tracks</div></div>
            <div>
                {
                    !!songsList.userTracks &&
                <Gallery songs={Object.values(songsList.userTracks)} length={24}/>
                }
            </div>
            <div className='textLine'>
            <div className='typeText'>Playlists</div>
            </div>
            <div className='bottomEl'>
                {
                !!Object.keys(playlists).length &&
                <MiniGallery list={playlists.Playlists} feat={'playlists'}/>
                }
            </div>
            </div>
        </div>
        </>
    );
}

export default LibraryPage;