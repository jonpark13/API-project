import React, { useEffect, useState } from 'react'
import ReactAudioPlayer from 'react-audio-player';
import './MusicPlayer.css'

function MusicPlayer() {
    let style = {
        width: "70%",
        backgroundColor: '#f1f3f4'
    }

    return (
        <>
        <div className='musicFoot'>
            <div className='musicCont'>
                <ReactAudioPlayer autoPlay controls style={style}/>
                <div className='other'>OTHERSTUFF</div>
            </div>
        </div>
        </>
    );
}

export default MusicPlayer;