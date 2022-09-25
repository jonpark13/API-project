import React, { useEffect, useState } from 'react'
import * as sessionActions from '../../store/session'
import * as songsActions from '../../store/songs'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import SongSlidingGallery from '../SongSlidingGallery'
import Gallery from '../Gallery'
import './DiscoverPage.css'

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

function DiscoverPage() {
    const dispatch = useDispatch();
    const songsList = useSelector(state => state.songs)
    // const imageList = songsList.Songs

    
    useEffect(() => {
        dispatch(songsActions.songsGrab())
        dispatch(songsActions.songSingleGrab(1))
    },[])

    return (
        <>
        <div className='discPage'>
            <div className='discContent'>
            <div className='discTitle'>Discover Tracks and Playlists</div>
            <div>
                        {
                            Object.keys(songsList).length &&
                            <Gallery songs={songsList.Songs} />
                        }
                    </div>
            <div>
            {/* {JSON.stringify(songsList)} */}
        </div>
        {/* <SongSlidingGallery songs={imageList} />
        <SongSlidingGallery songs={imageList} /> */}
        {/* {!imageList && shuffleList(imageList)} */}
        </div>
        </div>
        </>
    );
}

export default DiscoverPage;