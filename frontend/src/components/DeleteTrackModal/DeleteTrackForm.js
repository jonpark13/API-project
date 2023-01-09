import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as songsActions from "../../store/songs";
import logo from '../../assets/images/VVlogo.png'

function DeleteTrackForm({track, showModal, setShowModal}) {
  const dispatch = useDispatch();
  const ref = useRef()
  const onImageError = () => ref.current.src=track.previewImage;
  const sessionUser = useSelector((state) => state.session.user);

  
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch(songsActions.deleteSong(track.id))
    .then(() =>  setShowModal(false))
        .catch(async (res) => {
            const data = await res.json();
        });
};

  return (
    <>
    <div className="deleteFormCont">
      <div className="editImgCont"><img ref={ref} className="editImg" src={track.previewImage || logo}/></div>
    <form onSubmit={handleSubmit} className='editFormModal'>
        <div className="delNote">Permanently delete this track?</div>

        <div className='trackContainer'>
              {/* <img src={e.previewImage} alt={e.title}/> */}
              <div className='trackDetails'>
              <div className='trackTitle'>{track.title}</div>
              <div className='trackArtist'>{sessionUser.username}</div>
              </div>
          </div>
        <div>
          {errors.map((error, idx) => <div className="errorModalText" key={idx}>{error}</div>)}
        </div>

        <div className="editSaveBut">
        <button type="submit" className="delBut">Delete</button>
        <button className="cancelDelBut" onClick={() => setShowModal(false)}>Cancel </button>
        </div>
      </form>
    </div>
      
    </>
  );
}

export default DeleteTrackForm;