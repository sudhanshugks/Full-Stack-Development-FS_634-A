import React, { useState } from 'react';
import API from '../api';

export default function Login({ onAuth }) {
  const [username, setUsername] = useState(''); const [password, setPassword] = useState('');
  async function submit(e) {
    e.preventDefault();
    const res = await fetch(API.base + '/auth/login', {
      method: 'POST',
      headers: API.headers(),
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    if (data.token) onAuth(data.user, data.token);
    else alert(data.error || 'Login failed');
  }
  return (
    <form onSubmit={submit}>
      <h3>Login</h3>
      <input placeholder="username" value={username} onChange={e=>setUsername(e.target.value)} /><br/>
      <input placeholder="password" type="password" value={password} onChange={e=>setPassword(e.target.value)} /><br/>
      <button type="submit">Login</button>
    </form>
  );
}
