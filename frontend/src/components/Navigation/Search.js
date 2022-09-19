import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import * as songsActions from '../../store/songs'

function ProfileButton() {
    const dispatch = useDispatch()
    const [useSearch, setUseSearch] = useState('')

    const searchButton = (e) => {
        e.preventDefault();
        dispatch(songsActions.searchQuery(useSearch));
        console.log('text', useSearch)
      };

    return (
        <div>
            <form className='searchForm'>
                <input
                className="searchInput"
                placeholder="Search"
                value={useSearch}
                onChange={(e) => setUseSearch(e.target.value)}
                type='search'
                >
                    
                </input>
                <button type='submit' onClick={searchButton}>
                    <i className="fa-solid fa-magnifying-glass" />
                </button>
            </form>
        </div>
    );
}

export default ProfileButton;