import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

function LoginDemo() {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);

  const loginAsDemo = () => {
    console.log('hit')
    setErrors([]);
    console.log('loginformdemo')
    return dispatch(sessionActions.login({ credential:'Demo-lition', password: 'password' })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <div>
        <button onClick={() => loginAsDemo()}>Demo</button>
    </div>
  );
}

export default LoginDemo;