import React, { useState } from 'react'
import './Dropdown.css'

const Dropdown = (state) => {
    const [open, setOpen] = useState(false)
    return (
        <div className="container">
            <button class="button" onClick={() => setOpen(!open)} onBlur={setOpen(false)}>
                TESTBUTT
            </button>
       
            {
                state &&
                <div class="dropdownCont">
                    <ul>
                        <li>Add to Next Up</li>
                        <li>Add to Playlist</li>
                    </ul>
                </div>
            }
         
         </div>
    )
}

export default Dropdown