import React, { useState } from 'react';
import API_BASE from '../api';

export default function Signup({ onAuth }) {
  const [username, setU] = useState('');
  const [name, setN] = useState('');
  const [password, setP] = useState('');

  async function submit(e) {
    e.preventDefault();
    const res = await fetch(API_BASE + '/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, name })
    });
    const data = await res.json();
    if (data.token) onAuth(data.user, data.token);
    else alert(data.error);
  }

  return (
    <form onSubmit={submit}>
      <h3>Sign Up</h3>
      <input placeholder="Name" value={name} onChange={e=>setN(e.target.value)} /><br/>
      <input placeholder="Username" value={username} onChange={e=>setU(e.target.value)} /><br/>
      <input type="password" placeholder="Password" value={password} onChange={e=>setP(e.target.value)} /><br/>
      <button>Sign Up</button>
    </form>
  );
}
