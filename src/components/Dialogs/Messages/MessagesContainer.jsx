import React from 'react';
import Messages from './Messages';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/AuthRedirect';
import { sendMessageAC } from '../../../Redux/dialogs-reducer';
import { compose } from 'redux';


let mapStateToProps = (state) => ({
   message: state.dialogsPage.message,
   dialogsPage: state.dialogsPage
});


let mapDispatchToProps = (dispatch) => {
   return {
      sendMessage: (newMessageText) => {
         dispatch(sendMessageAC(newMessageText));
      }
   }

}

export default compose(
   connect(mapStateToProps, mapDispatchToProps),
   withAuthRedirect)
   (Messages);