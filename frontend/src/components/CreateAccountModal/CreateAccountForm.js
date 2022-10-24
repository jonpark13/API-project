import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";

function CreateAccountForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    dispatch(sessionActions.refreshUser())
  }, [])

  if (sessionUser.id) return <Redirect to="/discover" />; // turned off for vis

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signupUser({ email, username, password, firstName, lastName }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <>
    <div className="introText">
    Create your account!
    </div>
      <form onSubmit={handleSubmit} className='miniFormModal'>
        <input
          className="errorModalCont"
          type="text"
          placeholder="Your first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          className="errorModalCont"
          type="text"
          placeholder="Your last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <input
          className="errorModalCont"
          type="text"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="errorModalCont"
          type="text"
          placeholder="Your user name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />


        <input
          className="errorModalCont"
          type="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />


        <input
          className="errorModalCont"
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div>
          {errors.map((error, idx) => <div className="errorModalText" key={idx}>{error}</div>)}
        </div>

        <button type="submit" className="modalBut">Sign Up</button>
      </form>
    </>
  );
}

export default CreateAccountForm;