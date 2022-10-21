import React, { useEffect, useState } from 'react'
import * as sessionActions from '../../store/session'
import * as songsActions from '../../store/songs'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, NavLink, useHistory } from 'react-router-dom'
import LoginFormModal from '../LoginFormModal'
import CreateAccountModal from '../CreateAccountModal'
import Search from '../Navigation/Search'
import Gallery from '../Gallery'
import SongSlidingGallery from '../SongSlidingGallery'
import './HomePage.css'
import LoginDemo from '../LoginFormModal/LoginDemo'
import HomeLogo from '../../assets/images/VVHomeLogo.png'

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
    const history = useHistory()
    const sessionUser = useSelector((state) => state.session.user);
    const songsList = useSelector(state => state.songs)

    useEffect(() => {
        dispatch(songsActions.songsGrab())
        // dispatch(sessionActions.refreshUser())
    }, [])

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

    if (sessionUser.id) return <Redirect to="/discover" />

    return (
        <>
            <div className='homePage'>
                <div className='homeContent'>
                    <div className='splash' style={{ backgroundImage: `url(https://source.unsplash.com/1200x450?music%20festival)` }}>
                        <div className='homeLogoCont'>
                         <img src={HomeLogo} className='homeLogo' />
                        </div>
                        <div className='actionBut'>
                            <LoginFormModal name={'Sign In'} css={'signInCond'}/>
                            <CreateAccountModal name={'Create Account'} css={'createAccCond'}/>
                        </div>
                        <div className='topSplashCont'>
                            <div className='topSplashTextMain'>
                                What's next in music is first on WaveVapor
                            </div>
                            <div className='topSplashText'>
                            Upload your first track and begin your journey. WaveVapor gives you space to create, find your fans, and connect with other artists.
                            </div>
                            <CreateAccountModal name={'Start uploading today'} css={'createAccCondLarge'}/>
                        </div>

                    </div>

                    <div className='newsText'>
                        Hear what’s trending in the community
                    </div>
                    <div>
                        {
                            Object.keys(songsList).length &&
                            <Gallery songs={songsList.Songs} length={18}/>
                        }
                    </div>
                    <div>
                       <button className='exploreBut' onClick={() => history.push('/discover')}>Explore trending playlists</button>
                    </div>
                    <div className='botSplashCont'>
                        <div className='botSplashLeft'>
                            <div className='botSplashText'>
                                Calling all creators
                            </div>
                            <div className='botSplashText'>
                                Get on WaveVapor to connect with fans, share your sounds, and grow your audience. What are you waiting for?
                            </div>
                        </div>
                        <div className='botSplashRight' style={{ backgroundImage: `url(https://source.unsplash.com/450x450?music%20festival)` }}>
                        </div>
                    </div>
                    
                    <div className='lnewsText'>
                    Thanks for listening. Now join in.
                    </div>
                    <div className='newsText'>
                        Save tracks, follow artists and build playlists. All for free.
                    </div>
                    <div className='botCreateBut'>
                        <CreateAccountModal name={'Create Account'} css={'createAccCond'}/>
                    </div>
                    <div className='botSignBut'>
                        <div className='text'>Already have an account? </div>
                        <LoginFormModal name={'Sign In'} css={'signInCond'}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;