import React from 'react';
import s from './Messages.module.css';
import Message from '../Message/Message';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/Preloader/FormsControls/FormsControl';
import { maxLengthCreator, required } from '../../../utils/validators/validators';


const maxLength50 = maxLengthCreator(50);

const MessageForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field name={'newMessageText'} component={Textarea} validate={[required, maxLength50]} />
         </div>
         <button>add message</button>
      </form>
   )
}

const MessageReduxForm = reduxForm({ form: 'MessageText' })(MessageForm)




const Messages = (props) => {
   let state = props.dialogsPage;
   let messageElements = props.message.map(m => <Message Message={m.message} id={m.id} />);
   let newMessageText = state.newMessageText;

   let addNewMessage = (values) => {
      props.sendMessage(values.newMessageText);
   }


   return (
      <div>
         {messageElements}
         <MessageReduxForm onSubmit={addNewMessage} />
      </div>
   );
}

export default Messages;