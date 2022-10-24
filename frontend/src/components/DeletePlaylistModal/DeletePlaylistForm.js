import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import logo from '../../assets/images/VVlogo.png'
import * as playlistActions from "../../store/playlists";

function DeletePlaylistForm({playlist, showModal, setShowModal}) {
    const dispatch = useDispatch();
    const ref = useRef()
    const onImageError = () => ref.current.src = playlist.previewImage;
    const sessionUser = useSelector((state) => state.session.user);
    const [imageUrl, setImageUrl] = useState("");


    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        return dispatch(playlistActions.deletePlaylist(playlist.id))
            .then(() => setShowModal(false))
            .catch(async (res) => {
            const data = await res.json();
        });
    };

    return (<>
        <div className="deletePLFormCont">
            <form onSubmit={handleSubmit}
                className='editFormModal'>
                <div className="delNoteHeader">Delete playlist</div>

                <div className='playlistContainer'>
                    <div className='playlistDetails'>
                        <div className='delNote'>{`Are you sure you want to delete ${playlist.name}? This action cannot be undone.`}</div>
                    </div>
                </div>
                <div> {
                    errors.map((error, idx) => <div className="errorModalText"
                        key={idx}> {error}</div>)
                } </div>

                <div className="editSaveBut">
                    <button type="submit" className="delBut" >Delete</button>
                    <button className="cancelDelBut"
                        onClick={(e) => setShowModal(false)}>Cancel
                    </button>
                </div>
            </form>
        </div>

    </>);
}

export default DeletePlaylistForm;
