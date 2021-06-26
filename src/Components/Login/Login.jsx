import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./Login.module.css";
import { Input, createField } from "../Common/FormControls/FormsControls";
import { required, maxLength } from "../../utils/validators";
import { connect } from "react-redux";
import { login } from "../../Redux/Auth-reducer";
import { Redirect } from "react-router";

let maxLength50 = maxLength(50);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.loginForm}>
      {createField(s.login, s.loginInput, "email", Input, "Your email...", [
        required,
      ])}
      {createField(
        s.password,
        s.passwordInput,
        "password",
        Input,
        "Your password...",
        [required],
        { type: "password" }
      )}
      {createField(
        s.rememberMe,
        s.rememberMeCheck,
        "rememberMe",
        Input,
        null,
        [],
        { type: "checkbox" },
        "Remember me"
      )}
      {props.captchaURL && <img src={props.captchaURL} />}
      {props.captchaURL &&
        createField(
          s.captchaURL,
          s.captchaURLInput,
          "captchaURL",
          Input,
          "Enter captcha...",
          [required]
        )}
      {props.error && <div className={s.formSummaryError}>{props.error}</div>}
      <div className={s.formBtn}>
        <button className={s.btn}>Sign IN</button>
      </div>
    </form>
  );
};

let LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

let mapStateToProps = (state) => ({
  captchaURL: state.auth.capthaURL,
  isAuth: state.auth.isAuth,
});

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captchaURL
    );
  };

  if (props.isAuth) return <Redirect to={"/profile"} />;

  return (
    <div className={s.login}>
      <h3 className={s.loginTitle}>Login</h3>
      <LoginReduxForm onSubmit={onSubmit} captchaURL={props.captchaURL} />
    </div>
  );
};

export default connect(mapStateToProps, { login })(Login);
