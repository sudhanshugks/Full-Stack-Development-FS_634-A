import React, { useState } from 'react';
import API from '../api';

export default function Signup({ onAuth }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  async function submit(e) {
    e.preventDefault();
    const res = await fetch(API.base + '/auth/signup', {
      method: 'POST',
      headers: API.headers(),
      body: JSON.stringify({ username, password, display_name: displayName })
    });
    const data = await res.json();
    if (data.token) onAuth(data.user, data.token);
    else alert(data.error || 'Signup failed');
  }

  return (
    <form onSubmit={submit}>
      <h3>Signup</h3>
      <input placeholder="username" value={username} onChange={e=>setUsername(e.target.value)} /><br/>
      <input placeholder="display name" value={displayName} onChange={e=>setDisplayName(e.target.value)} /><br/>
      <input placeholder="password" type="password" value={password} onChange={e=>setPassword(e.target.value)} /><br/>
      <button type="submit">Signup</button>
    </form>
  );
}
