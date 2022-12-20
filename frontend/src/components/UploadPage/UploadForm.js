import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as songsActions from "../../store/songs";
import * as sessionActions from "../../store/session"
import ReactAudioPlayer from "react-audio-player";
import logo from '../../assets/images/VVlogo.png'
import './UploadPage.css'

function UploadFormPage() {
    const dispatch = useDispatch();
    const ref = useRef()
    const sessionUser = useSelector((state) => state.session.user);
    const [url, setUrl] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [albumId, setAlbumId] = useState("");
    const [errors, setErrors] = useState({});

    //   userId: user.id,
    //   albumId,
    //   title,
    //   description,
    //   url,
    //   previewImage: imageUrl

    const songVal = () => {
      let newErr = errors
      delete newErr['Valid MP3']
      setErrors(newErr)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({});
        return dispatch(songsActions.createSong({ userId: sessionUser.id, url, imageUrl:image, title, description }))
        .then(() => {e.preventDefault()
        setErrors([])
        setUrl('')
        setImageUrl('')
        setTitle('')
        setDescription('')
        setImage(null)
      })
        .catch(async (res) => {
                const data = await res.json();
                console.log(res)
                if (data && data.errors) setErrors(data.errors);
            })
    };

    const updateFile = (e) => {
      const file = e.target.files[0];
      console.log(file)
      if (file) setImage(file);
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
                            e.target.src = logo;
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
        <div className="errorModalText">{Object.keys(errors).includes('title') && errors['title']}</div>
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
        <div className="errorModalText">{Object.keys(errors).includes('Valid MP3') && errors['Valid MP3']}</div>
        <div>Track Image Url</div>
        <label>
          <input type="file" onChange={updateFile} />
        </label>
        <input
          className="errorModalCont"
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
            {/* <div>
          {Object.values(errors).map((error, idx) => <div className="errorModalText" key={idx}>{error}</div>)}
        </div> */}
        <div className="editSaveBut">
        <ReactAudioPlayer muted={true} autoPlay src={url} onCanPlay={() => setErrors(delete errors['Valid MP3'])} onError={() => setErrors({...errors, 'Valid MP3':'Please enter a valid MP3 url'})}/>
        <button type="submit" className="uploadSaveBut" disabled={Object.keys(errors).includes('Valid MP3')}>Save</button>
        <button className="cancelBut" onClick={handleReset}>Cancel</button>
        </div>
        </form>
        </div>
        </>
    );
}

export default UploadFormPage;