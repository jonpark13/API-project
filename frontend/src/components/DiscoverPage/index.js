import React, { useEffect, useState } from 'react'
import * as sessionActions from '../../store/session'
import * as songsActions from '../../store/songs'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import SongSlidingGallery from '../SongSlidingGallery'
import Gallery from '../Gallery'
import './DiscoverPage.css'
import ReactAudioPlayer from 'react-audio-player';

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
    const [type, setType] = useState('')
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
            {/* <ReactAudioPlayer controls={true} src={type}/>
            <input value={type}
          onChange={(e) => setType(e.target.value)}></input> */}
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