import React from 'react';
import s from './Person.module.css';
import { NavLink } from 'react-router-dom';



const Person = (props) => {

   let path = "/dialogs/" + props.id;

   return (
      <div>
         <div className={s.person}>
            <NavLink activeClassName={s.active} to={path}>{props.name}</NavLink>
         </div>
      </div>
   );
}

export default Person;