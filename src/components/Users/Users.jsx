import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.jpg';
import { NavLink } from 'react-router-dom';
import Pagination from '../common/Preloader/Pagination/Pagination';


let Users = (props) => {

   return (
      <div>
         <Pagination totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
            onPageChanged={props.onPageChanged}
            totalUsersCount={props.totalUsersCount} />

         <h2>Users</h2>
         {
            props.users.map(u => <div key={u.id}>

               <div className={s.userColOne}>
                  <div>
                     <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                     </NavLink>
                     {u.followed
                        ? <button disabled={props.isFollowing.some(id => id === u.id)} onClick={() => {
                           props.unfollow(u.id)
                        }}>unfollow</button>

                        : <button disabled={props.isFollowing.some(id => id === u.id)} onClick={() => {
                           props.follow(u.id)
                        }}>follow</button>}
                  </div>
               </div>
               <div className={s.userColTwo}>
                  <div>
                     <div>
                        <span>{u.name} </span>
                        {/* <span>{u.location.country}</span> */}
                     </div>
                     <span>{u.status}</span>
                     {/* <span>{u.location.city}</span> */}
                  </div>
               </div>
            </div>
            )
         }
      </div>
   );
};


export default Users;