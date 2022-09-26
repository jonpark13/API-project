import React, { useEffect, useRef, useState } from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { useDispatch, useSelector } from 'react-redux';
import * as playerActions from '../../store/musicplayer'
import * as songsActions from '../../store/songs'
import './MusicPlayer.css'

function MusicPlayer() {
    const ref = useRef()
    const dispatch = useDispatch()
    const currPlay = useSelector(state => state.musicplayer);

    let style = {
        width: "70%",
        backgroundColor: '#f1f3f4'
    }

    return (
        <>{Object.keys(currPlay).length &&
        <div className='musicFoot'>
            <div className='musicCont'>
                <ReactAudioPlayer autoPlay controls={true} src={currPlay.currentSong.url} style={style}/>
                <div className='playDetails'><img className='tPic' src={currPlay.currentSong.previewImage}/>
                    <div className='detailsTextCont'>
                    <div className='titleText'>{currPlay.currentSong.title}</div>
                    <div className='artistText'>{currPlay.currentSong.User.username}</div>
                    </div>
                </div>
            </div>
        </div>}
        </>
    );
}

export default MusicPlayer;