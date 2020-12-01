import * as axios from 'axios';


const instance = axios.create({
   withCredentials: true,
   headers: { "API-KEY": "a1ad1466-710a-427e-b2cb-515e2f4a1d91" },
   baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});


const usersAPI = {
   requestUsers(currentPage = 1, pageSize = 10) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => {
            return response.data;
         });
   },

   postFollow(userId) {
      return instance.post(`follow/${userId}`, {})
         .then(response => {
            return response.data;
         });
   },

   deleteFollow(userId) {
      return instance.delete(`follow/${userId}`)
         .then(response => {
            return response.data;
         });
   },

   getAuth() {
      return instance.get(`auth/me`)
   },

   getProfile(userId) {
      return instance.get(`profile/` + userId)

   },

   getStatus(userId) {
      return instance.get(`profile/status/` + userId)

   },

   updateStatus(status) {
      return instance.put(`profile/status`, { status })

   },

   login(email, password, rememberMe = false, captcha = null) {
      return instance.post(`auth/login`, { email, password, rememberMe, captcha })
   },

   logout() {
      return instance.delete(`auth/login`)

   },

   savePhoto(photoFile) {
      const formData = new FormData();
      formData.append("image", photoFile);

      return instance.put(`profile/photo`, formData, {
         headers: {
            'Content-Type': 'multipart/form-data'
         }
      });
   },

   saveProfile(profile) {
      return instance.put(`profile`, profile)

   },

   getCaptchaUrl() {
      return instance.get(`security/get-captcha-url`)

   },


}






export default usersAPI;