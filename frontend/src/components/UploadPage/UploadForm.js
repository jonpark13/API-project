import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as songsActions from "../../store/songs";
import * as sessionActions from "../../store/session"
import ReactAudioPlayer from "react-audio-player";
import logo from '../../assets/images/VVlogo.png'
import Playing from "../MusicPlayer/Playing";
import './UploadPage.css'

function UploadFormPage({setRecCreated}) {
    const dispatch = useDispatch();
    const ref = useRef()
    const sessionUser = useSelector((state) => state.session.user);
    const [url, setUrl] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [imgPrev, setImgPrev] = useState([])
    const [image, setImage] = useState(null);
    const [songFile, setSongFile] = useState([]);
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

    // useEffect(() => { 

    // }, [url])

    const songVal = () => {
      let newErr = errors
      delete newErr['Valid MP3']
      setErrors(newErr)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({});
        return dispatch(songsActions.createSong({ userId: sessionUser.id, url:url, imageUrl:image, title, description }))
        .then(() => {
          e.preventDefault()
          setErrors({})
          setUrl('')
          setImageUrl('')
          setTitle('')
          setDescription('')
          setImage(null)
      }).then(async (res) => {
        let data = await res.json()
        console.log(data, "data")
      })
        .catch(async (res) => {
                const data = await res.json();
                if (data.errors) setErrors(data.errors);
            })
    };

    const updateImageFile = (e) => {
      const file = e.target.files[0];
      console.log(file)
      if (file) setImage(file);
    };

    const updateSongFile = (e) => {
      const file = e.target.files[0];
      console.log(file)
      if (file) setUrl(file);
      else setUrl(null)
    };

    const imgPreviews = (e) => {
      let image = e.target
      if (image && image.files.length) {
          setImgPrev(Array.from(image.files))
          // console.log(imgPrev, "imgprev")
      }
      else {
          setImgPrev([])
      }
  }

    const handleReset = (e) => {
        e.preventDefault()
        setErrors({})
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
            <img className="editImg" src={imgPrev[0] ? URL.createObjectURL(imgPrev[0]) : imageUrl} onError={(e) => {
                            e.target.onerror = "";
                            e.target.src = logo;
                            e.target.style.background = "linear-gradient(90deg, rgba(255, 247, 255, 1) 0%, rgba(118, 194, 210, 1) 100%)"
                            return true;
                        }}
                        />
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
        {/* <div className="errorModalText">{JSON.stringify(errors)}</div> */}
        <div>Description</div>
        <textarea
          className="errorModalCont txtArea"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength='250'
        />
        <div>Track</div>
        <label>
          <input type="file" name="url" onChange={e => {updateSongFile(e, 0)}} />
        </label>
        {/* <input
          className="errorModalCont"
          type="text"
          placeholder="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        /> */}
        <div className="errorModalText">{Object.keys(errors).includes('Valid MP3') && errors['Valid MP3']}</div>
        <div>Upload Image</div>
        <label>
          <input type="file" name="imageUrl" onChange={e => {updateImageFile(e, 1);imgPreviews(e)}} />
        </label>
        {/* <input
          className="errorModalCont"
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => {setImageUrl(e.target.value);imgPreviews(e)}}
        /> */}
            {/* <div>
          {Object.values(errors).map((error, idx) => <div className="errorModalText" key={idx}>{error}</div>)}
        </div> */}
        <div className="editSaveBut">
        <ReactAudioPlayer muted={true} autoPlay src={url ? URL.createObjectURL(url) : null} onCanPlay={() => setErrors(prev => delete prev['Valid MP3'])} onError={() => setErrors({...errors, 'Valid MP3':'Please enter a valid MP3 url'})}/>
        <button type="submit" className="uploadSaveBut" disabled={Object.keys(errors).includes('Valid MP3') || !url}>Save</button>
        <button className="cancelBut" onClick={handleReset}>Cancel</button>
        </div>
        </form>
        </div>
        </>
    );
}

export default UploadFormPage;