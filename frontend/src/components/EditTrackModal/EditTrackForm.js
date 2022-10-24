import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import * as songsActions from "../../store/songs";
import logo from '../../assets/images/VVlogo.png'

function EditTrackForm({track, showModal, setShowModal}) {
  const dispatch = useDispatch();
  const ref = useRef()
  const onImageError = () => ref.current.src=track.previewImage;
  const [title, setTitle] = useState(`${track.title}`);
  const [description, setDescription] = useState(`${track.description}`);
  const [url, setUrl] = useState(`${track.url}`);
  const [imageUrl, setImageUrl] = useState(`${track.previewImage}`);
  const [errors, setErrors] = useState({});

  const handleCheck = () => {
    let audioElement = document.getElementById('mp3check')
    if(audioElement){
        audioElement.play()
      }
  }

  const songVal = () => {
    let newErr = errors
    delete newErr['Valid MP3']
    setErrors(newErr)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const check = dispatch(songsActions.editingSong({
        title,
        description,
        url,
        imageUrl,
        id: track.id
    })).then((res) => setShowModal(false))
        .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors)
        });
};

  return (
    <>
    <div className="introText">
    Basic Info
    </div>
    <div className="editFormCont">
      <div className="editImgCont">
      <img className="imgChecker" hidden src={imageUrl} onLoad={(e) => {setErrors(delete errors['imageUrl'])}} onError={() => setErrors({...errors, 'imageUrl':'Please check the image url'})}/>
        <img ref={ref} className="editImg" src={imageUrl || logo} onError={(e) => {
              e.target.onError = "";
              e.target.src = logo;
              return true;
          }}/></div>
    <form onSubmit={handleSubmit} className='editFormModal'>
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
          maxLength='250'
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className={`${description.length === 250 ? 'errorModalText' : 'ModalText'}`}>{`${description.length}/250`}</div>
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
        <input
          className="errorModalCont"
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <div className="errorModalText">{Object.keys(errors).includes('imageUrl') && errors['imageUrl']}</div>
        {/* <div>
          {Object.values(errors).map((error, idx) => <div className="errorModalText" key={idx}>{error}</div>)}
        </div> */}

        <div className="editSaveBut">
        <ReactAudioPlayer id='mp3check' muted={true} autoPlay src={url} onCanPlay={() => setErrors(delete errors['Valid MP3'])} onError={() => setErrors({...errors, 'Valid MP3':'Please enter a valid MP3 url'})}/>
        <button type="submit" className="saveBut" disabled={Object.keys(errors).includes('Valid MP3')}>Save</button>
        <button className="cancelBut" onClick={() => setShowModal(false)}>Cancel</button>
        </div>
      </form>
    </div>
      
    </>
  );
}

export default EditTrackForm;