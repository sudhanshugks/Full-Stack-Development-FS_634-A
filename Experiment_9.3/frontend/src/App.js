import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export default function App() {
  const [msg, setMsg] = useState('Loading...');

  useEffect(() => {
    axios.get(`${API_BASE}/api/hello`)
      .then(res => setMsg(res.data.greeting + ' @ ' + res.data.time))
      .catch(err => setMsg('Error fetching from backend: ' + err.message));
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 32, textAlign: 'center' }}>
      <h1>Fullstack App</h1>
      <p>{msg}</p>
      <p>Backend base URL: <code>{API_BASE}</code></p>
    </div>
  );
}
