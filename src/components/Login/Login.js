import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './login.css';

const Login = props => {
  const { user, googleSignIn, googleLogOut } = useAuth();

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
        <button onClick={googleSignIn}>Google Sign In</button>

        {user ? <button onClick={googleLogOut}>Log Out</button> : ''}

        <h1>{user.displayName}</h1>
        <p>
          Not An Account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
