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
    const [testImg, setTestImg] = useState([])
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const songsList = useSelector(state => state.songs)

    useEffect(() => {
        dispatch(songsActions.songsGrab())
        dispatch(sessionActions.refreshUser())
    },[])

    // const clickTest = () => {
    //     fetch(`https://source.unsplash.com/1600x900/?festival`)
    //     .then(res => (setTestImg(res.url)))
    //   };

    // const clickTest = () => {
    //     fetch(`https://api.unsplash.com/photos?query=festival`)
    //         .then(res => console.log(res)
    //         )
    //   };

    // useEffect(() => {
    //     fetch(`https://api.unsplash.com/photos?query=festival&count=3&client_id=https://api.unsplash.com/photos?query=festival&client_id=GjFUU97LaBEfX3m0aPiZMzzOhT3nJyNLPhSOMAETxso`)
    //         .then(res => {res.json()
    //             console.log(res)
    //         })
    //         .then(data => {
    //             console.log(data)
    //             // const imageList = data.map(e => e.urls.full)
    //             // setTestImg(imageList.slice(0, 2))
    //         })
    // },[])

    if (sessionUser) return <Redirect to="/discover" />

    return (
        <>
        <div className='homePage'>
        <div className='homeContent'>
            <div className='splash'>
                {/* {!!testImg.length && testImg.map((e,i) => {
                    return <div key={i} style={{backgroundImage: `url(${e})`,height:'100%',width:'100%'}}>test</div>
                })} */}
                {<div style={{backgroundImage: `url(https://source.unsplash.com/1200x450?festival,music)`,height:'100%',width:'100%'}}></div>}
            </div>
            {JSON.stringify(songsList)}
            {/* <button onClick={() => {clickTest()}}>test</button> */}
        </div>
        </div>
        </>
    );
}

export default HomePage;