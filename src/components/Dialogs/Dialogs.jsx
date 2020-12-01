import React from 'react';
import s from './Dialogs.module.css';
import PersonsContainer from './Persons/PersonsContainer';
import MessagesContainer from './Messages/MessagesContainer';




const Dialogs = () => {


   return (
      <div div className={s.DialogsContent} >
         <PersonsContainer />
         <MessagesContainer />
      </div >
   );
}

export default Dialogs;