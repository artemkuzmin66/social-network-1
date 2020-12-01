import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
   _state: {
      profilePage: {
         posts: [
            { id: 1, message: 'hey,bro', likesCount: '50' },
            { id: 2, message: 'how are you?', likesCount: '20' },
         ],
         newPostText: ''
      },

      dialogsPage: {
         person: [
            { id: 1, name: 'Dima' },
            { id: 2, name: 'Artem' },
            { id: 3, name: 'Ivan' },
            { id: 4, name: 'Denis' },
            { id: 5, name: 'Arseniy' },
            { id: 6, name: 'Katy' },
         ],
         newPersonText: '',

         message: [
            { id: 1, message: 'hey' },
            { id: 2, message: 'sup, friend' },
            { id: 3, message: 'keep going' },
         ]
      }
   },

   _callSubscriber() {
   },
   getState() {
      return this._state;
   },
   subscribe(observer) {
      this._callSubscriber = observer;
   },

   dispatch(action) {
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

      this._callSubscriber(this._state);

   },

}






export default store;



