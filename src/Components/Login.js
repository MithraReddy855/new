import React, { useState } from 'react';
import { auth, facebookProvider } from '../firebase';

import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful!');
      // Redirect or update UI here
    } catch (err) {
      setError(err.message);
    }
  };

  const handleFacebookLogin = async () => {
    setError('');
    try {
      await signInWithPopup(auth, facebookProvider);
      alert('Facebook login successful!');
      // Redirect or update UI here
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: 'auto' }}>
      <h2>Login Page</h2>
      {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem' }}
            placeholder="Enter your email"
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem' }}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" style={btnStyle}>
          Login
        </button>
      </form>

      <button onClick={handleFacebookLogin} style={fbBtnStyle}>
        Continue with Facebook
      </button>
    </div>
  );
}

const btnStyle = {
  width: '100%',
  padding: '0.75rem',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  marginBottom: '1rem',
};

const fbBtnStyle = {
  width: '100%',
  padding: '0.75rem',
  backgroundColor: '#3b5998',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  fontWeight: 'bold',
};

export default Login;
