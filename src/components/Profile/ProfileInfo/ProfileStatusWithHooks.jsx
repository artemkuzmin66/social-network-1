import React, { useEffect } from 'react';
import { useState } from 'react';
import s from './ProfileInfo.module.css';



const ProfileStatusWithHooks = (props) => {

   let [editMode, setEditMode] = useState(false);
   let [status, setStatus] = useState(props.status);

   useEffect(() => {
      setStatus(props.status)
   }, [props.status]);

   const activeEditMode = () => {
      setEditMode(true);
   }
   const deactivateEditMode = () => {
      setEditMode(false);
      props.updateUserStatus(status);
   }

   const onUserStatusChange = (e) => {
      setStatus(e.currentTarget.value);
   }

   return (
      <>
         { !editMode &&
            <div>
               <b>status</b>: <span onDoubleClick={activeEditMode} >{props.status || '-'}</span>
            </div>
         }
         {editMode &&
            <div>
               <input onChange={onUserStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
            </div>
         }
      </>
   );
}

export default ProfileStatusWithHooks;