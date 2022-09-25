import React, { useEffect, useState } from 'react'
import * as sessionActions from '../../store/session'
import * as songsActions from '../../store/songs'
import * as playlistActions from '../../store/playlists'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import MiniNav from '../MiniNav'
import EditTrackModal from '../EditTrackModal'
import DeleteTrackModal from '../DeleteTrackModal'
import './UserTracks.css'

function UserTracks() {
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
                    {!!(songsList.userTracks) && Object.keys(songsList.userTracks).map((e, i) => (
                        <div className='trackContainer'>
                            {/* <img src={e.previewImage} alt={e.title}/> */}
                            <div className='trackImgCont'>
                            <img className='trackImg' src={`https://picsum.photos/seed/${i}/173`} alt='test' />
                            </div>
                            <div className='trackDetails'>
                            <div className='trackTitle'>{songsList.userTracks[e].title}</div>
                            <div className='trackArtist'>{sessionUser.username}</div>
                            <EditTrackModal track={songsList.userTracks[e]}/>
                            <DeleteTrackModal track={songsList.userTracks[e]} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default UserTracks;