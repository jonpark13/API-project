import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as playlistActions from '../../store/playlists'
import * as playerActions from '../../store/musicplayer'
import playButton from '../../assets/images/playButFinal.png'
import pauseButton from '../../assets/images/pauseButFinal.png'
import './MiniGallery.css'

const MiniGallery = ({ list,feat }) => {
    const dispatch = useDispatch()
    const [button, setButton] = useState(null)

    let remArrLen
    let listLength = Object.keys(list).length
    if (listLength < 6) {
        remArrLen = 6 - listLength
    }

    const addToPlayer = (id) => {
        if(feat === 'playlists'){
            // console.log(id, 'selected Song')
            return dispatch(playerActions.addPlaylist(id))
        }
        if(feat === 'songs') {
            return dispatch(playerActions.addToPlay(id))
        }
    }

    const handler = (id) => {
        return dispatch(playlistActions.playlistGrabById(id))
            .catch(async (res) => {
                const data = await res.json();
                console.log(data)
            });
    };
    const handlePause = () => {
        let audioElement = document.getElementsByClassName('react-audio-player')
        audioElement[0].pause()
    }
    const handlePlay = () => {
        let audioElement = document.getElementsByClassName('react-audio-player')
        audioElement[0].play()
    }

    return (
        <div className='miniGalleryBox'>
            {Object.values(list).map((e, i) => (
                <div className="mimgBox" key={i} >
                    {/* <img src={e.previewImage} alt={e.title}/> */}
                    <div className='mimgCont'>
                        <img className='mimgO' src={e.imageUrl || e.previewImage} alt="" onError={(e) => {
                            e.target.onerror = "";
                            e.target.src = "";
                            e.target.style.display = 'none'
                            e.target.style.background = "linear-gradient(90deg, rgba(255, 247, 255, 1) 0%, rgba(118, 194, 210, 1) 100%)"
                            return true;
                        }}/>
                        <img className='playButOverlay' src={playButton} onClick={() => {addToPlayer(e.id);setButton(i);handlePlay()}}/>
                        <img className={(button === i) ? 'pauseButForward' : 'pauseButOverlay'} src={pauseButton} onClick={() => {setButton(null);handlePause()}}/>
                    </div>
                    <div className='titleText'>{e.name || e.title}</div>
                    {/* <div className='artistText'>{list[e].userId}</div> */}
                </div>
            ))}
            {
                Array(remArrLen).fill(<div className="mimgFill"></div>)
            }
        </div>
    )
}

export default MiniGallery