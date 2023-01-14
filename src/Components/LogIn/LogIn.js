import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, FacebookAuthProvider} from "firebase/auth";
import app from '../../firebase.init';

const auth = getAuth(app);
const LogIn = () => {
    const [logIn, setLogIN] = useState({});
    const [email, setEmail] = useState({});
    const provider = new GoogleAuthProvider();
    const gitprovider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const handleLogInSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
        const user = result.user;
        console.log(user);
        setLogIN(user);
    })
    .catch((error) => {
    const errorCode = error.code;
    setLogIN(errorCode)
    });
}
const getEmail=(event)=>{
    const email = event.target.value;
    setEmail(email);
}
const handleForgetPassword =() =>{
    sendPasswordResetEmail(auth, email)
  .then(() => {
    alert('Check your Email to get password')
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode);
    // ..
  });
}
const googleSignIn = () =>{
    signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    setLogIN(user);
  }).catch((error) => {
    const errorCode = error.code;
    console.log(errorCode);
  });
}
const facebookSignIn = () =>{
    signInWithPopup(auth, facebookProvider)
  .then((result) => {
    const user = result.user;
    setLogIN(user);
  }).catch((error) => {
    const errorCode = error.code;
    console.log(errorCode);
  });
}
const githubSignIn = () =>{
    signInWithPopup(auth, gitprovider)
  .then((result) => {
    const user = result.user;
    setLogIN(user);
  }).catch((error) => {
    const errorCode = error.code;
    console.log(errorCode);
    
  });
}
const signOuthandle = () =>{
    signOut(auth).then(() => {
        setLogIN({})
        }).catch((error) => {
        });
    }
    return (
        <div>
            {
                logIn.uid? <button onClick={signOuthandle} className='mt-5'>Sign out</button>
                :
                <div className='w-50 mx-auto mt-5'>
            <Form onSubmit={handleLogInSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onBlur={getEmail} type="email" name='email' required placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' required placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Log In
      </Button>
    </Form>
    <p>Log in with one of the Following</p>
    <button onClick={googleSignIn}>Google</button>
    <button onClick={facebookSignIn}>Facebook Sign in</button>
    <button onClick={githubSignIn}>Github</button>
    <p className='mt-3'>Or <button className='text-primary bg-light' onClick={handleForgetPassword}>Forgot Password</button></p>
    <p>IF you haven't any account <Link className='text-decoration-none .text-info-emphasis mt-2' to='/registration'>Sign up</Link></p>
    
    </div>
            }
            <p>{logIn.email}</p>
        </div>
    );
};

export default LogIn;