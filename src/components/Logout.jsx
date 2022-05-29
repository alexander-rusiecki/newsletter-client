import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Logout = () => {
  const [logoutMsg, setLogoutMsg] = useState('');

  const clearCookie = async () => {
    const response = await fetch(
      'http://localhost:4000/api/v1/logout',

      {
        credentials: 'include',
      }
    );
    const data = await response.json();
    setLogoutMsg(data);
  };
  useEffect(() => {
    clearCookie();
  }, []);

  return (
    <div className="logout-container">
      {logoutMsg && (
        <>
          <h1>{logoutMsg.msg}</h1>
        </>
      )}
      <Link to="/">Back to Home page</Link>
    </div>
  );
};

export default Logout;
