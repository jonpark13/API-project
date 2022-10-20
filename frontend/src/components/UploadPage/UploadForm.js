import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as songsActions from "../../store/songs";
import * as sessionActions from "../../store/session"
import './UploadPage.css'
import ReactAudioPlayer from "react-audio-player";

function UploadFormPage() {
    const dispatch = useDispatch();
    const ref = useRef()
    const sessionUser = useSelector((state) => state.session.user);
    const [url, setUrl] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [albumId, setAlbumId] = useState("");

    //   userId: user.id,
    //   albumId,
    //   title,
    //   description,
    //   url,
    //   previewImage: imageUrl

    // useEffect(() => {
    //     dispatch(sessionActions.refreshUser())
    // }, [errors])

    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(songsActions.createSong({ userId: sessionUser.id, url, previewImage:imageUrl, title, description }))
            .catch(async (res) => {
                const data = await res.json();
                console.log(data)
                if (data && data.errors) setErrors(data.errors);
            });
    };

    const handleReset = (e) => {
        e.preventDefault()
        setErrors([])
        setUrl('')
        setImageUrl('')
        setTitle('')
        setDescription('')
    }

    return (
        <>
        <div className="introCreateText">
        Basic Info
        </div>
        <div className="createFormCont">
          <div className="editImgCont">
            <img className="editImg" src={imageUrl} onError={(e) => {
                            e.target.onerror = "";
                            e.target.src = "";
                            e.target.style.background = "linear-gradient(90deg, rgba(255, 247, 255, 1) 0%, rgba(118, 194, 210, 1) 100%)"
                            return true;
                        }}/>
          </div>
        <form onSubmit={handleSubmit} className='createSongForm'>
        <div>Title</div>
        <input
          className="errorModalCont"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div>Description</div>
        <textarea
          className="errorModalCont txtArea"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div>Track Url</div>
        <input
          className="errorModalCont"
          type="text"
          placeholder="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <div>Track Image Url</div>
        <input
          className="errorModalCont"
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
            <div>
          {Object.values(errors).map((error, idx) => <div className="errorModalText" key={idx}>{error}</div>)}
        </div>
        <div className="editSaveBut">
        
        <ReactAudioPlayer muted={true} autoPlay controls src={url} onCanPlay={() => setErrors([])} onError={() => setErrors({'Valid MP3':'Please enter a valid MP3 url'})}/>
        <button type="submit" className="uploadSaveBut" disabled={errors.length}>Save</button>
        <button className="cancelBut" onClick={handleReset}>Cancel </button>
        <div>{JSON.stringify(errors)}</div>
        </div>
        <div>
          {url}
        </div>
        </form>
        </div>
        </>
    );
}

export default UploadFormPage;