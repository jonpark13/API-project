import React, { useEffect, useRef, useState } from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { useDispatch, useSelector } from 'react-redux';
import * as playerActions from '../../store/musicplayer'
import * as songsActions from '../../store/songs'
import logo from '../../assets/images/VVlogo.png'
import Playing from './Playing';
import './MusicPlayer.css'

function MusicPlayer() {
    const ref = useRef()
    const dispatch = useDispatch()
    const currPlay = useSelector(state => state.musicplayer.currentSong);
    const nextList = useSelector(state => state.musicplayer.nextSongs)
    const [showMenu, setShowMenu] = useState(false);
    const onClick = () => setShowMenu(!showMenu);

    let style = {
        width: "70%",
        backgroundColor: '#f1f3f4'
    }

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
      };
      
      useEffect(() => {
        if (!showMenu) return;
    
        const closeMenu = () => {
          setShowMenu(false);
        };
    
        document.addEventListener('click', closeMenu);
      
        return () => document.removeEventListener("click", closeMenu);
      }, [showMenu]);

    useEffect(() => {
        console.log('next')
    },[dispatch])

    const handlePlay = () => {
        let audioElement = document.getElementsByClassName('react-audio-player')
        audioElement[0].play()
    }

    return (
        <>{Object.keys(currPlay).length &&
            <>
                <div className='musicFoot'>
                    <div className='musicCont'>
                        <ReactAudioPlayer onEnded={() => {dispatch(playerActions.nextInLine());handlePlay()}} autoPlay controls={true} src={currPlay.url} style={style}/>
                        <div className='playDetails' >
                            <img className='tPic' src={currPlay.previewImage || logo} onError={(e) => {
                                        e.target.onError = "";
                                        e.target.src = logo;
                                        e.target.style.background = "linear-gradient(90deg, rgba(255, 247, 255, 1) 0%, rgba(118, 194, 210, 1) 100%)"
                                        return true;
                                    }}/>
                            <div className='detailsTextCont'>
                            <div className='titleText'>{currPlay.title}</div>
                            <div className='artistText'>{currPlay.User.username}</div>
                            </div>
                        </div>
                    <i className={`fa-solid fa-list${showMenu? ' playActive' : ''}`} onClick={onClick} />
                    </div>
                </div>
                <div className={`playMod ${showMenu ? 'active' : 'inactive'}`}>
                <Playing song={currPlay}/>
                {
                    !!nextList.length && nextList.map((e) => (
                       <Playing song={e}/>
                    ))
                }
            </div>
        </>
        }
        </>
    );
}

export default MusicPlayer;