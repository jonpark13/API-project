import React, { useEffect, useState } from 'react'
import * as sessionActions from '../../store/session'
import * as songsActions from '../../store/songs'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import './UploadPage.css'

function UploadPage() {
    const dispatch = useDispatch();

    return (
        <>
        <div className='mainPage'>
            UploadPAGE
            <div>
            </div>
        </div>
        </>
    );
}

export default UploadPage;