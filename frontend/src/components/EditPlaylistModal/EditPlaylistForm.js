import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import logo from '../../assets/images/VVlogo.png'
import * as playlistActions from '../../store/playlists'

function EditPlaylistForm({playlist, showModal, setShowModal}) {
  const dispatch = useDispatch();
  const ref = useRef()
  const [name, setName] = useState(`${playlist.name}`);
  const [imageUrl, setImageUrl] = useState(`${playlist.imageUrl}`);

  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault()
    const check = dispatch(playlistActions.editingPlaylist({
        name,
        imageUrl,
        id: playlist.id
    })).then(() => {setShowModal(false)
    }).catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors)
            console.log(data.errors)
        });
};

  return (
    <>
    <div className="introText">
    Basic Info
    </div>
    <div className="editFormCont">
      <div className="editImgCont"><img ref={ref} className="editImg" src={imageUrl || logo}/></div>
    <form onSubmit={handleSubmit} className='editFormModal'>
        <div>Name</div>
        <input
          className="errorModalCont"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="errorModalText">{Object.keys(errors).includes('name') && errors['name']}</div>
        <div>Playlist Image Url</div>
        <input
          className="errorModalCont"
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
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