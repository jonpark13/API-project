import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as playlistActions from '../../store/playlists'
import * as playerActions from '../../store/musicplayer'
import playButton from '../../assets/images/playButFinal.png'
import pauseButton from '../../assets/images/pauseButFinal.png'
import './MiniGallery.css'

const MiniGallery = ({ list }) => {
    const dispatch = useDispatch()
    const [button, setButton] = useState(null)

    let remArrLen
    let listLength = Object.keys(list).length
    if (listLength < 6) {
        remArrLen = 6 - listLength
    }

    const addPlaylistToPlayer = (id) => {
        // console.log(id, 'selected Song')
        return dispatch(playerActions.addPlaylist(id))
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
                        <img className='mimgO' src={e.previewImage || e.imageUrl} alt='test' />
                        <img className='playButOverlay' src={playButton} onClick={() => {addPlaylistToPlayer(e.id);setButton(i);handlePlay()}}/>
                        <img className={(button === i) ? 'pauseButForward' : 'pauseButOverlay'} src={pauseButton} onClick={() => {setButton(null);handlePause()}}/>
                    </div>
                    <div className='titleText'>{e.name}</div>
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