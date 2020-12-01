import usersAPI from "../api/api";
import { stopSubmit } from "redux-form";


const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';



let initialState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,
   isFetching: true,
   captchaUrl: null

};

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:
      case GET_CAPTCHA_URL_SUCCESS:
         return {
            ...state,
            ...action.payload
         }

      default:
         return state;

   }

}


export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } });
export const getCaptchaUrlSuccess = (captchaUrl) => ({ type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } });



export const getAuthUserData = () => (dispatch) => {
   usersAPI.getAuth()
      .then(response => {
         if (response.data.resultCode === 0) {
            let { id, login, email } = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
         }
      });
}

export const login = (email, password, rememberMe, captcha) => (dispatch) => {
   usersAPI.login(email, password, rememberMe, captcha)
      .then(response => {
         if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
         } else {
            if (response.data.resultCode === 10) {
               dispatch(getCaptchaUrl())
            }

            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
            dispatch(stopSubmit("login", { _error: message }));
         }
      });
}


export const logout = () => (dispatch) => {
   usersAPI.logout()
      .then(response => {
         if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
         }
      });
}

export const getCaptchaUrl = () => async (dispatch) => {
   const response = await usersAPI.getCaptchaUrl();
   const captchaUrl = response.data.url;
   dispatch(getCaptchaUrlSuccess(captchaUrl))

}





export default authReducer;


