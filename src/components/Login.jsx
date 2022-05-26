import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/api/v1/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (data.user) {
        navigate('/dashboard');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      <h1>Login</h1>
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
        {/* <label htmlFor="newsletter">Newsletter</label>
        <input
          type="checkbox"
          name="newsletter"
          checked={isSubscribing}
          onChange={e => setIsSubscribing(e.target.isSubscribing)}
        /> */}
        <div className="error newsletter"></div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;