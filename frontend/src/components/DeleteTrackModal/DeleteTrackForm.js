import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as songsActions from "../../store/songs";

function DeleteTrackForm({track, showModal, setShowModal}) {
  const dispatch = useDispatch();
  const ref = useRef()
  const onImageError = () => ref.current.src=track.previewImage;
  const sessionUser = useSelector((state) => state.session.user);
  const [imageUrl, setImageUrl] = useState("");
  

  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch(songsActions.deleteSong(track.id))
        .catch(async (res) => {
            const data = await res.json();
            console.log('data', data)
        });
};

  return (
    <>
    <div className="deleteFormCont">
      <div className="editImgCont"><img ref={ref} className="editImg" src={imageUrl}/></div>
    <form onSubmit={handleSubmit} className='editFormModal'>
        <div>Permanently delete this track?</div>

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
        <button className="cancelDelBut" onClick={(e) => setShowModal(false)}>Cancel </button>
        </div>
      </form>
    </div>
      
    </>
  );
}

export default DeleteTrackForm;