import React, { useEffect, useState } from 'react'
import * as sessionActions from '../../store/session'
import * as songsActions from '../../store/songs'
import * as playlistActions from '../../store/playlists'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
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
        dispatch(sessionActions.refreshUser())
        dispatch(songsActions.songsGrab())
        dispatch(playlistActions.playlistsCurrGrab())
    },[])

    return (
        <>
        <div className='libPage'>
            NEW NAV BAR GOES HERE
            <div>
                {JSON.stringify(sessionUser)}
            </div>
            <div>
                {
                Object.keys(songsList).length &&
                <Gallery songs={songsList.Songs} />
                }
            </div>
            <div>Playlists</div>
            <div>
                {
                Object.keys(playlists).length &&
                <MiniGallery list={playlists.Playlists} />
                }
            </div>
        </div>
        </>
    );
}

export default LibraryPage;