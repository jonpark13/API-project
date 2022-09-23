import React, { useEffect, useState } from 'react'
import * as sessionActions from '../../store/session'
import * as songsActions from '../../store/songs'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import UploadFormPage from './UploadForm'
import './UploadPage.css'

function UploadPage() {
    const dispatch = useDispatch();
    const songsList = useSelector(state => state.songs)
    const imageList = songsList.Songs

    
    useEffect(() => {
        dispatch(songsActions.songsGrab())
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('hit')
        return dispatch(songsActions.deleteSong(10))
            .catch(async (res) => {
                const data = await res.json();
                console.log('data', data)
            });
    };

    const handleSubmit2 = (e) => {
        e.preventDefault();
        console.log('hit')
        return dispatch(songsActions.editingSong({
            title:'afterEdit',
            description:'afterEdit',
            url:'afterEdit',
            imageUrl:'afterEdit',
            id: 11
        }))
            .catch(async (res) => {
                const data = await res.json();
                console.log('data', data)
            });
    };

    return (
        <div className='uploadPage'>
            <div className='uploadContent'>
            Upload Page /// maybe nav?
            <div className='formCont'>
                <UploadFormPage />
            </div>
            <div>
                <button onClick={handleSubmit}>delete song 6</button>
                <button onClick={handleSubmit2}>edit song</button>
            </div>
            <div>
                {JSON.stringify(songsList)}
            </div>
            </div>
        </div>
    );
}

export default UploadPage;