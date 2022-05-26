import { useState, useEffect } from 'react';

const Dashboard = () => {
  const [email, setEmail] = useState('');
  const [subscriber, setSubscriber] = useState(null);

  const getSubscription = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/v1/dashboard', {
        credentials: 'include',
      });
      const data = await response.json();
      setEmail(data.user.email);
      setSubscriber(data.user.isSubscribing);
    } catch (error) {
      console.log(error);
    }
  };

  const updateSubscription = async e => {
    e.preventDefault();
    setSubscriber(!subscriber);
    try {
      await fetch('http://localhost:4000/api/v1/dashboard', {
        method: 'PATCH',
        body: JSON.stringify({ isSubscribing: subscriber }),
        credentials: 'include',
        headers: {
          'Content-type': 'application/json',
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSubscription();
  }, [email]);

  return (
    <div className="dashboard-container">
      {email && (
        <div>
          <h1>Welcome {email}</h1>
          {subscriber ? (
            <h2>You are subscribed</h2>
          ) : (
            <h2>You are not subscribed</h2>
          )}
          <button onClick={updateSubscription}>
            {subscriber ? 'unsubscribe' : 'subscribe'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
