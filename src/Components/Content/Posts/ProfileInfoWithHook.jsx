import React from 'react';
import Preloader from '../../Preloader/Preloader';
import { useState } from 'react';

const ProfileInfoWithHook = (props) => {
    
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)

    let activateEditMode = () => {
        setEditMode(true)
    }
    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatusThunkCreator(status)
    }
    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return(
        <div>
            {props.profile &&
            <div>
            <img src={props.profile.photos.large}/>
            {props.profile.aboutMe}
            {!editMode ?
            <div>
                <span onDoubleClick={activateEditMode}>{props.status}</span>
            </div>
            :
            <div>
                <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange} value={status} type="text"/>
            </div> 
            }   
            </div>
            }   
        </div>
    )
} 

export default ProfileInfoWithHook;