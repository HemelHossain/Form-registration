import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app from '../../firebase.init';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { Link } from 'react-router-dom';
const auth = getAuth (app);
const Registration = () => {
  const [userPassword, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const handleFormSubmit = (event) =>{
    event.preventDefault();
    setSuccess(false);
    let form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    if(password.length < 6){
      setPassword('Password length should at least have  6 character');
      return;
    }
    if(!/(?=.*[!@#$&*])/.test(password)){
      setPassword('At least Password should have 2 Special character');
      return;
    }
createUserWithEmailAndPassword(auth, email, password)
  .then((result) => {
    const user = result.user;
    console.log(user);
    setSuccess(true);
    form.reset();
    emailVerification()
    
  })
  .catch((error) => {
    const errorCode = error.code;
    setPassword(errorCode);
    
  });
const emailVerification = () =>{
  sendEmailVerification(auth.currentUser)
  .then(() => {
    alert('Please Cheeck your email to verification')
  });
} 

  }
    return (
        <div className='w-50 mx-auto mt-5'>
            <Form onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' required placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" placeholder="Your Full Name" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' required placeholder="Password" />
      </Form.Group>
      <p className='text-danger'>{userPassword}</p>
      {success && <p className='text-success'>Congratulations user created successfully</p>}
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <p>All ready have an account <Link className='text-decoration-none .text-info-emphasis' to='/login'>Log In</Link></p>
        </div>
    );
};

export default Registration;