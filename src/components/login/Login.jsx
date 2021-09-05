import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../../modules/user/actions/index';

import './Login.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const userIsLoggedIn = useSelector((state) => state.user.userIsLoggedIn);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginButtonHidden, hideLoginButton] = useState(false);
  const signIn = async (event) => {
    event.preventDefault();
    dispatch(actions.setUserLoggedIn(email, password));
  };
  const signOut = async (event) => {
    event.preventDefault();
    dispatch(actions.setUserLoggedOut());
  };
  return !userIsLoggedIn ? (
    <div className="login-form-wrapper">
      {!loginButtonHidden && (
        <button
          type="button"
          onClick={() => hideLoginButton(true)}
          className="btn btn-primary"
        >
          Login
        </button>
      )}
      {loginButtonHidden && (
        <div>
          <div className="form-group">
            <label htmlFor="email">
              Email address
              <input
                type="email"
                className="form-control"
                id="InputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
            <small id="emailHelp" className="form-text text-muted">
              We&#39;ll never share your email with anyone else.
            </small>
            <label htmlFor="password">
              Password
              <input
                type="password"
                className="form-control"
                id="InputPassword1"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(event) => signIn(event)}
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => hideLoginButton(false)}
            className="btn btn-primary login-form-cancel"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  ) : (
    userIsLoggedIn && (
      <div className="login-form-wrapper">
        <button
          type="button"
          onClick={(event) => signOut(event)}
          className="btn btn-danger login-form-cancel"
        >
          Logout
        </button>
      </div>
    )
  );
};

export default LoginForm;
