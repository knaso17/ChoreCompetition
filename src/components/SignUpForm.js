import React, { useState } from 'react';
import { db } from '../firebase-config';
import { collection, addDoc } from 'firebase/firestore'

const SignUpForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
  //state objects
  const [values, setValues] = useState(initialValues);
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const usersCollectionRef = collection(db, "users")

  //event handlers
  const handleChange = (event) => {
    const value = event.target.value;
    setValues({
      ...values,
      [event.target.name]: value
    });
  }

  const createUser = async () => {
    await addDoc(usersCollectionRef, values)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.firstName && values.lastName && values.email && values.password){
      setValid(true);
      createUser();
    }
    setSubmitted(true);
  }



  return(
    <>
    <h1>Sign Up</h1>
    <form onSubmit={handleSubmit}>
      {submitted && valid &&
        <div className="success-message">
          Success! Thank you for signing up!
        </div>
      }
      <div>
        <label htmlFor="firstName">
            <small>First Name: </small>
          </label>
          <input name="firstName" type="text" placeholder='first' value={values.firstName} onChange={handleChange}/>
      </div>
      {submitted && !values.firstName &&
        <span id="first-name-error">
          Please enter a first name
        </span>
      }
      <div>
        <label htmlFor="lastName">
            <small>Last Name: </small>
          </label>
          <input name="lastName" type="text" placeholder='last' value={values.lastName} onChange={handleChange}/>
      </div>
      {submitted && !values.lastName &&
        <span id="last-name-error">
          Please enter a last name
        </span>
      }
      <div>
        <label htmlFor="email">
          <small>Email: </small>
        </label>
        <input type="text" name="email" placeholder='email' value={values.email} onChange={handleChange}/>
      </div>
      {submitted && !values.email &&
        <span id="email-error">
          Please enter an email address
          </span>
      }
      <div>
        <label htmlFor="password">
          <small>Password: </small>
        </label>
        <input name="password" type="password" placeholder='password' value={values.password} onChange={handleChange}/>
      </div>
      {submitted && !values.password &&
        <div id="password-error">
          Please enter a password
        </div>
      }
      <button type="submit">Sign Up</button>
    </form>
    </>
  )
}

export default SignUpForm;
