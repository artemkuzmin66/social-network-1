import React from 'react';
import Persons from './Persons';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
   return {
      person: state.dialogsPage.person,

   }

}

const PersonsContainer = connect(mapStateToProps)(Persons);

export default PersonsContainer;