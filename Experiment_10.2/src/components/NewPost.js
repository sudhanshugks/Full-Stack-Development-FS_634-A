import React, { useState } from 'react';
import API from '../api';

export default function NewPost({ onPosted }) {
  const [title, setTitle] = useState(''); const [body, setBody] = useState('');

  async function submit(e) {
    e.preventDefault();
    const res = await fetch(API.base + '/posts', {
      method: 'POST',
      headers: API.headers(),
      body: JSON.stringify({ title, body })
    });
    if (res.ok) {
      setTitle(''); setBody('');
      onPosted?.();
      window.location.reload();
    } else {
      const json = await res.json();
      alert(json.error || 'Failed');
    }
  }

  return (
    <form onSubmit={submit}>
      <h3>New Post</h3>
      <input placeholder="title" value={title} onChange={e=>setTitle(e.target.value)} /><br/>
      <textarea placeholder="body" value={body} onChange={e=>setBody(e.target.value)} /><br/>
      <button type="submit">Post</button>
    </form>
  );
}
