import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import LoginDemo from "./LoginDemo";
import { useDispatch } from "react-redux";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    console.log('loginform')
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <>
      <div className="introText">Welcome Back!</div>
      <form onSubmit={handleSubmit} className='formModal'>

        <input
          className="errorModalCont"
          placeholder="Your username or email"
          type="username"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
        />

        <input
          className="errorModalCont"
          placeholder="Your password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="errorModalContLogin">
          {errors.map((error, idx) => (
            <div className="errorModalText" key={idx}>{error}</div>
          ))}
        </div>
        <button className="modalBut" type="submit">Sign In</button>
      </form>
      <div className="formDemoModal">
        <div className="errorModalCont">
        <LoginDemo css={"modalBut"}/>
        </div>
      </div>

    </>
  );
}

export default LoginForm;