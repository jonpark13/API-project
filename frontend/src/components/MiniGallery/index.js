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
                <div className="imgBox" key={i}>
                    {/* <img src={e.previewImage} alt={e.title}/> */}
                    <div className='imgCont'>
                        <img className='imgO' src={`https://picsum.photos/seed/${i}/173`} alt='test'/>
                    </div>
                    <text className='titleText'>{e.name}</text>
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

export default MiniGallery