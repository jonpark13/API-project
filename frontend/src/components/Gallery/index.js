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
                <div className="imgBox" >
                    {/* <img src={e.previewImage} alt={e.title}/> */}
                    <img className='imgO' src={`https://picsum.photos/seed/${i}/173`} alt='test'/>
                    <text className='titleText'>{e.title}</text>
                    <br />
                    <text className='artistText'>{e.userId}</text>
                </div>
            ))}
            {
                Array(remArrLen).fill(<div className="imgFill"></div>)
            }
        </div>
    )
}

export default Gallery