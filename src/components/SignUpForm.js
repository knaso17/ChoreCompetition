import React, { useState, useEffect } from 'react';

const SignUpForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: ''
  }

  const [values, setValues] = useState(initialValues);

  return(
    <form>
      <div>
        <label htmlFor="firstname">
            <small>First Name:</small>
          </label>
          <input name="firstname" type="text" />
      </div>
      <div>
        <label htmlFor="lastname">
            <small>Last Name:</small>
          </label>
          <input name="lastname" type="text" />
      </div>
      <div>
        <label htmlFor="email">
          <small>Email</small>
        </label>
        <input type="text" name="email" />
      </div>
      <div>
        <label htmlFor="password">
          <small>Password</small>
        </label>
        <input name="password" type="password" />
      </div>
    </form>
  )
}

export default SignUpForm;
