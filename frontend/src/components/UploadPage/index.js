import React, { useEffect, useState } from 'react'
import * as sessionActions from '../../store/session'
import * as songsActions from '../../store/songs'
import * as playlistActions from '../../store/playlists'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import UploadFormPage from './UploadForm'
import './UploadPage.css'

function UploadPage() {
    const dispatch = useDispatch();
    const songsList = useSelector(state => state.songs)
    const sessionUser = useSelector((state) => state.session.user);
    const playlist = useSelector(state => state.playlists)
    const imageList = songsList.Songs

    useEffect(() => {
        dispatch(songsActions.songsGrab())
        dispatch(playlistActions.playlistsCurrGrab())
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

    const handleSubmit3 = (e) => {
        e.preventDefault();
        console.log('hit')
        return dispatch(playlistActions.createPlaylist({
            userId:sessionUser.id,
            name: 'testPLaylist',
            imageUrl: 'test'
        }))
            .catch(async (res) => {
                const data = await res.json();
                console.log('data', data)
            });
    };

    const handleSubmit4 = (e) => {
        e.preventDefault();
        return dispatch(playlistActions.addSongToPlaylist(5,4))
            .catch(async (res) => {
                const data = await res.json();
                console.log('data', data)
            });
    };

    const handleSubmit5 = (e) => {
        e.preventDefault();
        return dispatch(playlistActions.deletePlaylist(10))
            .catch(async (res) => {
                const data = await res.json();
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
            <div>
                <button onClick={handleSubmit3}>create playlist</button>
            </div>
            <div>
                <button onClick={handleSubmit4}>add song to playlist</button>
            </div>
            <div>
                <button onClick={handleSubmit5}>delete playlist</button>
            </div>
            <div>
                {JSON.stringify(playlist)}
            </div>
            </div>
        </div>
    );
}

export default UploadPage;