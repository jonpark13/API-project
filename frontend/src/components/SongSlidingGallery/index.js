import React, {useState} from 'react'
import './SongSlidingGallery.css'

const SongSlidingGallery = ({songs}) => {
    return (
        <div className='galleryBox'>
            <button className='leftArr arrows'><i className="fa-solid fa-chevron-left" /></button>
            <button className='rightArr arrows'><i className="fa-solid fa-chevron-right" /></button>
            {!!songs && songs.map(e => (<div className="imgBox" >
                <img src={e.previewImage} alt={e.title}/></div>))}
        </div>
    )
}

export default SongSlidingGallery