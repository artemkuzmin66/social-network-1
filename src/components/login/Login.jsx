import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { createField, Input } from '../common/Preloader/FormsControls/FormsControl';
import { login } from '../../Redux/auth-reducer'
import { Redirect } from 'react-router-dom';
import style from '../common/Preloader/FormsControls/FormsControls.module.css';

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
   return (
      <form onSubmit={handleSubmit}>
         {createField("Email", "email", [required], Input)}
         {createField("Password", "password", [required], Input, { type: "password" })}
         {createField(null, "rememberMe", [], Input, { type: "checkbox" }, "remember me")}

         {captchaUrl && <img src={captchaUrl} />}
         {captchaUrl && createField("Symbols from image", "captcha", [required], Input, {})}

         { error && <div className={style.formSummaryError}>
            {error}
         </div>
         }
         <div>
            <button>Login</button>
         </div>
      </form>
   )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)



const Login = (props) => {

   const onSubmit = (formData) => {
      props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
   }

   if (props.isAuth) {
      return <Redirect to={"/profile"} />
   }

   return <div>
      <h1>login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
   </div>
}

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, { login })(Login);