import React, {useState} from 'react'
import './MiniGallery.css'

const MiniGallery = ({list}) => {
    let remArrLen
    if(list.length < 6){
        remArrLen = 6 - list.length
    }
    return (
        <div className='miniGalleryBox'>
            {!!list.length && list.map((e,i) => (
                <div className="mimgBox" key={i}>
                    {/* <img src={e.previewImage} alt={e.title}/> */}
                    <div className='mimgCont'>
                        <img className='mimgO' src={`https://picsum.photos/seed/${i}/173`} alt='test'/>
                    </div>
                    <div className='titleText'>{e.name}</div>
                    <br />
                    <div className='artistText'>{e.userId}</div>
                </div>
            ))}
            {
                Array(remArrLen).fill(<div className="mimgFill"></div>)
            }
        </div>
    )
}

export default MiniGallery