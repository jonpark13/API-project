import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as songsActions from "../../store/songs";

function EditTrackForm({track, showModal, setShowModal}) {
  const dispatch = useDispatch();
  const ref = useRef()
  const onImageError = () => ref.current.src=track.previewImage;
  const [title, setTitle] = useState(`${track.title}`);
  const [description, setDescription] = useState(`${track.description}`);
  const [url, setUrl] = useState(`${track.url}`);
  const [imageUrl, setImageUrl] = useState(`${track.previewImage}`);
  

  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const check = dispatch(songsActions.editingSong({
        title,
        description,
        url,
        imageUrl,
        id: track.id
    })).then((res) => setShowModal(false))
        // .catch(async (res) => {
        //     const data = await res.json();
        //     if (data && data.errors) setErrors(data.errors)
        // });
};

  return (
    <>
    <div className="introText">
    Basic Info
    </div>
    <div className="editFormCont">
      <div className="editImgCont"><img ref={ref} className="editImg" src={imageUrl}/></div>
    <form onSubmit={handleSubmit} className='editFormModal'>
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
        <button type="submit" className="saveBut" >Save</button>
        <button className="cancelBut" onClick={() => setShowModal(false)}>Cancel </button>
        </div>
      </form>
    </div>
      
    </>
  );
}

export default EditTrackForm;