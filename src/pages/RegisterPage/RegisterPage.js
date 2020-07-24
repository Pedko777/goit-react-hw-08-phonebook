import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const handleNameChange = ({ target }) => setName(target.value);

  const [email, setEmail] = useState("");
  const handleEmailChange = ({ target }) => setEmail(target.value);

  const [password, setPassword] = useState("");
  const handlePasswordChange = ({ target }) => setPassword(target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      authOperations.register({
        name: name,
        email: email,
        password: password,
      })

    );
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Enter your name..."
            onChange={handleNameChange}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email..."
            onChange={handleEmailChange}
          />
        </label>
        <label>
        Password
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password..."
            onChange={handlePasswordChange}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};


export default RegisterPage;
