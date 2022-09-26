import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as songsActions from "../../store/songs";

function EditPlaylistForm({playlist, showModal, setShowModal}) {
  const dispatch = useDispatch();
  const ref = useRef()
  const [title, setTitle] = useState(`${playlist.title}`);
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  

  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const check = dispatch(songsActions.editingSong({
        title,
        imageUrl,
        id: playlist.id
    })).then(async (res) => await console.log(res, "res"))
        // .catch(async (res) => {
        //     const data = await res.json();
        //     if (data && data.errors) setErrors(data.errors)
        // });
    console.log(check, 'check')
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
        <div>Playlist Image Url</div>
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
        <button className="cancelBut" onClick={(e) => setShowModal(false)}>Cancel </button>
        </div>
      </form>
    </div>
      
    </>
  );
}

export default EditPlaylistForm;