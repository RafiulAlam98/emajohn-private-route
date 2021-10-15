import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firbase.init';

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch(error => {
        const errorMessage = error.message;
        console.log(error);
        setError(errorMessage);
      });
  };

  const googleLogOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(error => {
        setError(error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        console.log('get user', user);
        setUser(user);
      }
    });
  }, []);

  return {
    user,
    error,
    googleSignIn,
    googleLogOut,
  };
};

export default useFirebase;
