import React, {useState} from 'react'
import './Gallery.css'

const Gallery = ({songs}) => {
    songs = Array(3).fill(songs).flat()
    let remArrLen
    if(songs.length < 24){
        remArrLen = 24 - songs.length
    }
    return (
        <div className='galleryBox'>
            {!!songs.length && songs.map((e,i) => (
                <div className="imgBox" key={i}>
                    {/* <img src={e.previewImage} alt={e.title}/> */}
                    <div className='imgCont'>
                        <img className='imgO' src={`https://picsum.photos/seed/${i}/173`} alt='test'/>
                    </div>
                    <div className='titleText'>{e.title}</div>
                    <br />
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