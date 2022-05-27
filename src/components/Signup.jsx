import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const checkboxRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch(
        'https://newsletter-app-server.herokuapp.com/api/v1/signup',
        {
          method: 'POST',
          body: JSON.stringify({
            email,
            password,
            isSubscribing: checkboxRef.current.checked,
          }),
          credentials: 'include',

          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await response.json();
      if (data) {
        navigate('/dashboard');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          required
          onChange={e => setEmail(e.target.value)}
        />
        <div className="error email"></div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          required
          onChange={e => setPassword(e.target.value)}
        />
        <div className="error password"></div>
        <label htmlFor="newsletter">Newsletter</label>
        <input type="checkbox" name="newsletter" ref={checkboxRef} />
        <div className="error newsletter"></div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
