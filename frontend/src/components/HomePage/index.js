import React, { useEffect, useState } from 'react'
import * as sessionActions from '../../store/session'
import * as songsActions from '../../store/songs'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import SongSlidingGallery from '../SongSlidingGallery'
import './HomePage.css'

// const shuffleList = (arr) => {
//     let rem = arr.length
//     console.log(rem)
//     while (rem--) {
//         let randPos = Math.floor(Math.random() * (rem))
//         let curr = arr[rem]
//         arr[rem] = arr[randPos]
//         arr[randPos] = curr

//     }

//     return arr
// }

function HomePage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const songsList = useSelector(state => state.songs)

    useEffect(() => {
        dispatch(songsActions.songsGrab())
        dispatch(sessionActions.refreshUser())
    },[])

    if (sessionUser) return <Redirect to="/discover" />

    return (
        <>
        <div className='mainPage'>
            HOMEPAGE
        </div>
        <div>
            {JSON.stringify(songsList)}
        </div>
        </>
    );
}

export default HomePage;