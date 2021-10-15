import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

import './login.css';

const Login = props => {
  const { user, googleSignIn, googleLogOut } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirectUrl = location.state?.form || './shop';

  const handleGoogleLogin = () => {
    googleSignIn().then(result => {
      history.push(redirectUrl);
    });
  };

  return (
    <div className="login-form">
      <div>
        <form>
          <h2>Sign-In</h2>
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <button onClick={handleGoogleLogin}>Google Sign In</button>

        {user.email ? <button onClick={googleLogOut}>Log Out</button> : ''}

        <h1>{user.displayName}</h1>
        <p>
          Not An Account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
