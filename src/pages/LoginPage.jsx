import React, { useState } from "react";
import Card from "../components/UI/Modals/Card";
import Clrbutton from "../components/UI/Buttons/ClrButton";
import classes from "../styles/pages/LoginPage.module.css";

function LoginPage() {
  const [enterEmail, setEnterEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enterPassword, setEnterPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (event) => {
    setEnterEmail(event.target.value);
    setFormIsValid(
      event.target.value.includes("@") && enterPassword.trim().length < 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnterPassword(event.target.value);
    setFormIsValid(
      event.target.value.trim().length < 6 && enterEmail.includes("@")
    );
  };
  const validateEmailHandler = () => {
    setEmailIsValid(enterEmail.includes("@"));
  };
  const validatePasswordHandler = () => {
    setPasswordIsValid(enterPassword.trim().length < 6);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enterEmail, enterPassword);
  };

  return (
    <Card classesName={classes.login}>
      <form onSubmit={submitHandler}>
        <h2>咖啡地圖</h2>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            placeholder="帳號"
            value={enterEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            placeholder="密碼"
            value={enterPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Clrbutton type="submit" disabled={!formIsValid}>
            登入
          </Clrbutton>
        </div>
      </form>
    </Card>
  );
}

export default LoginPage;
