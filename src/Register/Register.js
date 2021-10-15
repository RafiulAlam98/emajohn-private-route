import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './Register.css';

const Register = props => {
  const { googleSignIn, user, googleLogOut } = useAuth();

  return (
    <div className="register-form">
      <div>
        <h2>Sign Up</h2>
        <form>
          <label htmlFor="name">Your Name</label>
          <br />
          <input type="name" />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" />
          <br />
          <input type="submit" value="Register" />
        </form>
        <button onClick={googleSignIn}>Google Sign In</button>
        <p>
          Already Account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
