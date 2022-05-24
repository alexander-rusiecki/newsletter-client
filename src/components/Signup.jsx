import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/api/v1/signup', {
        email,
        password,
        isSubscribing: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
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
        {/* <input
          type="checkbox"
          name="newsletter"
          checked={isSubscribing}
          onChange={e => setIsSubscribing(e.target.isSubscribing)}
        /> */}
        <div className="error newsletter"></div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
