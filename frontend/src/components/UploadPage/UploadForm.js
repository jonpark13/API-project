import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as songsActions from "../../store/songs";
import * as sessionActions from "../../store/session"
import './UploadPage.css'

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
    // }, [])

    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(songsActions.createSong({ userId: sessionUser.id, url, previewImage:imageUrl, title, description }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    };

    const handleReset = (e) => {
        e.preventDefault()
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
          required
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
          required
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
          {errors.map((error, idx) => <div className="errorModalText" key={idx}>{error}</div>)}
        </div>
        <div className="editSaveBut">
        <button type="submit" className="saveBut">Save</button>
        <button className="cancelBut" onClick={handleReset}>Cancel </button>
        </div>
        </form>
        </div>
        </>
    );
}

export default UploadFormPage;