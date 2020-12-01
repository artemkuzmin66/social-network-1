import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

   return (
      <div className={s.content}>
         <ProfileInfo profile={props.profile}
            status={props.status}
            updateUserStatus={props.updateUserStatus}
            isOwner={props.isOwner}
            savePhoto={props.savePhoto}
            saveProfile={props.saveProfile} />
         <MyPostsContainer />
      </div>
   );
}

export default Profile;