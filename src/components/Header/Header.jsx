import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {

   return (

      <header className={s.header}>
         <img src='https://bumper-stickers.ru/7436-thickbox_default/logotip-twitter.jpg' />
         <div className={s.loginBlock}>
            {props.isAuth
               ? <div> {props.login}  <button onClick={props.logout}>Log out</button></div>
               : <NavLink to={'/login'}>login</NavLink>}
         </div>

      </header>
   );
}

export default Header;