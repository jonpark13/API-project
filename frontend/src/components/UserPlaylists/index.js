import React, { useEffect, useState } from 'react'
import * as sessionActions from '../../store/session'
import * as songsActions from '../../store/songs'
import * as playlistActions from '../../store/playlists'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import MiniNav from '../MiniNav'
import EditPlaylistModal from '../EditPlaylistModal'
import DeletePlaylistModal from '../DeletePlaylistModal'
import './UserPlaylists.css'

function UserPlaylists() {
    const dispatch = useDispatch();
    const songsList = useSelector(state => state.songs)
    const sessionUser = useSelector((state) => state.session.user);
    const playlist = useSelector(state => state.playlists)

    useEffect(() => {
        dispatch(songsActions.songsGrab())
        dispatch(songsActions.userSongsGrab())
        dispatch(playlistActions.playlistsCurrGrab())
    }, [dispatch])

    const handleEdit = (e) => {
        e.preventDefault();
        console.log('hit2')
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
                <MiniNav />
                <div className='trackList'>
                    {!!(playlist.Playlists) && Object.keys(playlist.Playlists).map((e, i) => (
                        <div className='trackContainer'>
                            {/* <img src={e.previewImage} alt={e.title}/> */}
                            <div className='trackImgCont'>
                            <img className='trackImg' src={playlist.Playlists[e].imageUrl} alt='test' />
                            </div>
                            <div className='trackDetails'>
                            <div className='trackTitle'>{playlist.Playlists[e].name}</div>
                            <div className='trackArtist'>{sessionUser.username}</div>
                            <EditPlaylistModal playlist={playlist.Playlists[e]}/>
                            <DeletePlaylistModal playlist={playlist.Playlists[e]} />
                            </div>
                        </div>
                    ))}
                </div>
                <div>{JSON.stringify(playlist)}</div>
            </div>
        </div>
    );
}

export default UserPlaylists;