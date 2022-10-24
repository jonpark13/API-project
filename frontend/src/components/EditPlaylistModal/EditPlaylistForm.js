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
                            e.target.onerror = "";
                            e.target.src = logo;
                            e.target.style.background = "linear-gradient(90deg, rgba(255, 247, 255, 1) 0%, rgba(118, 194, 210, 1) 100%)"
                            return true;
                        }}/>
        </div>
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
        <div className="errorModalText">{Object.keys(errors).includes('imageUrl') && errors['imageUrl']}</div>
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