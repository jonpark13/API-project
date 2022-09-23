import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as playlistActions from '../../store/playlists'
import './MiniGallery.css'

const MiniGallery = ({ list }) => {
    const dispatch = useDispatch()

    let remArrLen
    let listLength = Object.keys(list).length
    if (listLength < 6) {
        remArrLen = 6 - listLength
    }

    const handler = (id) => {
        return dispatch(playlistActions.playlistGrabById(id))
            .catch(async (res) => {
                const data = await res.json();
                console.log(data)
            });
    };

    return (
        <div className='miniGalleryBox'>
            {Object.keys(list).map((e, i) => (
                <div className="mimgBox" key={i} onClick={() => handler(e)}>
                    {/* <img src={e.previewImage} alt={e.title}/> */}
                    <div className='mimgCont'>
                        <img className='mimgO' src={`https://picsum.photos/seed/${i}/173`} alt='test' />
                    </div>
                    <div className='titleText'>{list[e].name}</div>
                    <div className='artistText'>{list[e].userId}</div>
                </div>
            ))}
            {
                Array(remArrLen).fill(<div className="mimgFill"></div>)
            }
        </div>
    )
}

export default MiniGallery


// {!!listLength && list.map((e,i) => (
//     <div className="mimgBox" key={i}>
//         {/* <img src={e.previewImage} alt={e.title}/> */}
//         <div className='mimgCont'>
//             <img className='mimgO' src={`https://picsum.photos/seed/${i}/173`} alt='test'/>
//         </div>
//         <div className='titleText'>{e.name}</div>
//         <br />
//         <div className='artistText'>{e.userId}</div>
//     </div>
// ))}