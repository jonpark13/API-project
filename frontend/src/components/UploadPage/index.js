import React, { useEffect, useState } from 'react'
import * as sessionActions from '../../store/session'
import * as songsActions from '../../store/songs'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import UploadFormPage from './UploadForm'
import './UploadPage.css'

function UploadPage() {
    const dispatch = useDispatch();

    return (
        <div className='uploadPage'>
            <div className='uploadContent'>
            Upload Page /// maybe nav?
            <div className='formCont'>
                <UploadFormPage />
            </div>
            </div>

        </div>
    );
}

export default UploadPage;