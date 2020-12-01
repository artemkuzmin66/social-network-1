import { stopSubmit } from "redux-form";
import usersAPI from "../api/api";

const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'




let initialState = {
   posts: [
      { id: 1, message: 'hey,bro', likesCount: '50' },
      { id: 2, message: 'how are you?', likesCount: '20' },
   ],
   profile: null,
   status: ""
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'ADD-POST': {
         let newPost = {
            id: 3,
            message: action.newPostText,
            likesCount: 0
         };
         let stateCopy = { ...state };
         stateCopy.posts = [...state.posts];
         stateCopy.posts.push(newPost);
         stateCopy.newPostText = '';
         return stateCopy;
      }

      case SET_USER_PROFILE: {
         return { ...state, profile: action.profile }
      }
      case SET_USER_STATUS: {
         return { ...state, status: action.status }
      }
      case SAVE_PHOTO_SUCCESS: {
         return { ...state, profile: { ...state.profile, photos: action.photos } }
      }

      default:
         return state;

   }

}


export const addPostActionCreator = (newPostText) => ({ type: 'ADD-POST', newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })



export const getUserProfile = (userId) => async (dispatch) => {
   let response = await usersAPI.getProfile(userId);

   dispatch(setUserProfile(response.data));
};


export const getUserStatus = (userId) => async (dispatch) => {
   let response = await usersAPI.getStatus(userId);

   dispatch(setUserStatus(response.data));
};


export const updateUserStatus = (status) => async (dispatch) => {
   let response = await usersAPI.updateStatus(status);

   if (response.data.resultCode === 0) {
      dispatch(setUserStatus(status));
   }
};


export const savePhoto = (file) => async (dispatch) => {
   let response = await usersAPI.savePhoto(file);

   if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos));
   }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
   const userId = getState().auth.userId;
   let response = await usersAPI.saveProfile(profile);

   if (response.data.resultCode === 0) {
      dispatch(getUserProfile(userId));
   } else {
      dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }));
      return Promise.reject(response.data.messages[0]);
   }
};








export default profileReducer;


