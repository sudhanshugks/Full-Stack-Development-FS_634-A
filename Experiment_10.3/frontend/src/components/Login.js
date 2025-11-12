import React, { useState } from 'react';
import API_BASE from '../api';

export default function Login({ onAuth }) {
  const [username, setU] = useState('');
  const [password, setP] = useState('');

  async function submit(e) {
    e.preventDefault();
    const res = await fetch(API_BASE + '/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    if (data.token) onAuth(data.user, data.token);
    else alert(data.error);
  }

  return (
    <form onSubmit={submit}>
      <h3>Login</h3>
      <input placeholder="Username" value={username} onChange={e=>setU(e.target.value)} /><br/>
      <input type="password" placeholder="Password" value={password} onChange={e=>setP(e.target.value)} /><br/>
      <button>Login</button>
    </form>
  );
}
