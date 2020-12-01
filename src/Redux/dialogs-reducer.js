let initialState = {
   person: [
      { id: 1, name: 'Dima' },
      { id: 2, name: 'Artem' },
      { id: 3, name: 'Ivan' },
      { id: 4, name: 'Denis' },
      { id: 5, name: 'Arseniy' },
      { id: 6, name: 'Katy' },
   ],

   message: [
      { id: 1, message: 'hey' },
      { id: 2, message: 'sup, friend' },
      { id: 3, message: 'keep going' },
   ]
}

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'SEND-MESSAGE': {
         let text = action.newMessageText;
         let stateCopy = { ...state };
         stateCopy.message = [...state.message];
         stateCopy.message.push({ id: 4, message: text });
         stateCopy.newMessageText = '';
         return stateCopy;
      }
      default:
         return state;
   }
}

export const sendMessageAC = (newMessageText) => ({ type: 'SEND-MESSAGE', newMessageText })

export default dialogsReducer;