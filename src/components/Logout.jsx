import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Logout = () => {
  const [logoutMsg, setLogoutMsg] = useState('');

  const clearCookie = async () => {
    const response = await fetch(
      'https://newsletter-app-server.herokuapp.com/api/v1/logout',
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
          <Link to="https://alexander-rusiecki.github.io/newsletter-client">
            Home
          </Link>
        </>
      )}
    </div>
  );
};

export default Logout;
