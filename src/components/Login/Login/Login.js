import React from 'react'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext, useState } from 'react';
import { UserContext } from "../../../App";
import { useHistory, useLocation } from "react-router-dom";


if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}




function Login() {
  const [user, setUser] = useState({
    isSignIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  })
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } }
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleClickGoogle = () => {
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        const user2 = result.user
        const { displayName, photoURL, email } = user2;
        const singInGoogle = {
          isSignIn: true,
          name: displayName,
          email: email,
          photo: photoURL
        };
        setUserToken();
        setLoggedInUser(singInGoogle)
        history.replace(from)
        setUser(singInGoogle)
      })
      .catch(err => {
        console.log(err);
        console.log(err.massage);
      })
  }

  const setUserToken = ()=>{
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
      sessionStorage.setItem('token', idToken)
    }).catch(function(error) {
      // Handle error
    })
  }

  const handleClickGoogle2 = () => {
    firebase.auth().signOut().then((res) => {
      const signOut = {
        isSignIn: false,
        name: '',
        email: '',
        photo: '',
        error: '',
        Congratulations: ''
      }
      setUser(signOut)
    }).catch(err => {
      console.log(err);
      console.log(err.massage);
    });
  }
  return (
    <div className="App">
      {user.isSignIn ? <p style={{ border: '0px', color: '#fff', cursor: 'pointer', backgroundColor: 'gray', padding: '3px', borderRadius: '5px' }} onClick={handleClickGoogle2}>Sign Out</p>
       : 
      <p style={{ border: '0px', color: '#fff', cursor: 'pointer', backgroundColor: 'gray', padding: '3px', borderRadius: '5px' }} onClick={handleClickGoogle}>Login</p>}
      <p style={{ color: 'red', fontSize: '5vmin' }}>{user.error}</p>
    </div>
  );
}

export default Login;