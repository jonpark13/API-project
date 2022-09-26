import React, {useEffect, useRef, useState} from 'react'
import './Gallery.css'
import playButton from '../../assets/images/playButFinal.png'
import pauseButton from '../../assets/images/pauseButFinal.png'
import ellipses from '../../assets/images/ellipses.png'
import PlaylistModal from '../PlaylistModal'
import AddPlaylistModal from '../AddPlaylistModal'
import Dropdown from '../Dropdown'
import * as playerActions from '../../store/musicplayer'
import { useDispatch } from 'react-redux'

const Gallery = ({songs, length}) => {
    const dispatch = useDispatch()
    const ref = useRef()
    const [open, setOpen] = useState(null)
    const [button, setButton] = useState(null)
    const [butOverlay, setButOverlay] = useState('pauseButOverlay')

    useEffect(() => {
        if (!open) return;
    
        const closeMenu = () => {
            setOpen(null);
        };
    
        document.addEventListener('click', closeMenu);
      
        return () => document.removeEventListener("click", closeMenu);
      }, [open]);
    
    // songs = Array(3).fill(songs).flat()
    let remArrLen
    if(songs.length < length){
        remArrLen = length - songs.length
    }
    else {
        songs = songs.slice(0,17)
    }

    let style = {"gridTemplateRows": `repeat(${(length/6)}, 1fr)`}

    const dropdownHandler = (id) => {
        if(open === id){
            setOpen(null)
        }
        else {
            setOpen(id)
        }
    }
    // let audioElement = document.getElementsByClassName('react-audio-player')

    const addSelectedToPlayer = (id) => {
        // console.log(id, 'selected Song')
        return dispatch(playerActions.addToPlay(id))
    }
    const addSelectedToNext = (id) => {
        // console.log(id, 'selected Song')
        return dispatch(playerActions.addToNext(id))
    }
    const handlePause = () => {
        let audioElement = document.getElementsByClassName('react-audio-player')
        audioElement[0].pause()
    }
    const handlePlay = () => {
        let audioElement = document.getElementsByClassName('react-audio-player')
        audioElement[0].play()
    }
    // useEffect(() => {
    //     let audioElement = document.getElementsById('mplayer')
    // })
    const handleEllipse = (e) => {
        if(e === open){
            setOpen(null)
        }
        else{
            setOpen(e)
        }
    }

    return (
        <div className='galleryBox' style={style}>
            {!songs.Songs && songs.map((e,i) => (
                <div className="imgBox" key={i}>
                    {/* <img src={e.previewImage} alt={e.title}/> */}
                    <div className='imgCont'>
                        <img className='imgO' src={e.previewImage} alt='test'/>
                        <img className='playButOverlay' src={playButton} onClick={() => {addSelectedToPlayer(e.id);setButton(i);handlePlay()}}/>
                        <img className={(button === i) ? 'pauseButForward' : 'pauseButOverlay'} src={pauseButton} onClick={() => {setButton(null);handlePause()}}/>
                        <img className='ellipsesOverlay' src={ellipses} onClick={() => {handleEllipse(i)}} />
                        <div className="dropdownCont" hidden={!(open === i)}>
                            <ul> 
                                <li onClick={() => {addSelectedToNext(e.id);setOpen(null)}}>Add to Next Up</li>
                                <PlaylistModal song={e}/>
                                <AddPlaylistModal song={e}/>
                            </ul>
                            </div>
                        </div>
                    <div className='titleText'>{e.title}</div>
                    <div className='artistText'>{e.User.username}</div>
                </div>
            ))}
            {
                Array(remArrLen).fill(<div className="imgFill"></div>)
            }
        </div>
    )
}

export default Gallery