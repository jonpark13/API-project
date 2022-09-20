import React, { useEffect, useState } from 'react'
import * as sessionActions from '../../store/session'
import * as songsActions from '../../store/songs'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import SongSlidingGallery from '../SongSlidingGallery'
import './DiscoverPage.css'

function DiscoverPage() {
    const dispatch = useDispatch();
    const songsList = useSelector(state => state.songs)
    const imageList = songsList.Songs
    useEffect(() => {
        dispatch(songsActions.songsGrab())
    },[])

    return (
        <>
        <div className='mainPage'>
            test
        </div>
        <div>
            {JSON.stringify(songsList)}
        </div>
        <SongSlidingGallery songs={imageList} />
        <SongSlidingGallery songs={imageList} />
        </>
    );
}

export default DiscoverPage;