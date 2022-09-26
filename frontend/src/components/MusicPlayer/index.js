import React, { useEffect, useState } from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { useDispatch, useSelector } from 'react-redux';
import * as playerActions from '../../store/musicplayer'
import * as songsActions from '../../store/songs'
import './MusicPlayer.css'

function MusicPlayer() {
    const dispatch = useDispatch()
    const currPlay = useSelector(state => state.musicplayer);

    useEffect(() => {
        dispatch(songsActions.songsGrab())
    }, [dispatch])

    let style = {
        width: "70%",
        backgroundColor: '#f1f3f4'
    }

    return (
        <>
        <div className='musicFoot'>
            <div className='musicCont'>
                <ReactAudioPlayer autoPlay controls src={currPlay.currentSong.url} style={style}/>
                <div className='other'>{JSON.stringify(currPlay)}</div>
            </div>
        </div>
        </>
    );
}

export default MusicPlayer;