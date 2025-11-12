import React, { useEffect, useState } from 'react';
import API from '../api';

export default function PostView({ id, onClose }) {
  const [data, setData] = useState(null);
  const [comment, setComment] = useState('');

  useEffect(()=> {
    fetch(API.base + '/posts/' + id).then(r=>r.json()).then(setData);
  }, [id]);

  async function addComment(e) {
    e.preventDefault();
    const res = await fetch(API.base + '/comments/' + id, {
      method: 'POST',
      headers: API.headers(),
      body: JSON.stringify({ body: comment })
    });
    if (res.ok) {
      setComment('');
      const updated = await fetch(API.base + '/posts/' + id).then(r=>r.json());
      setData(updated);
    } else {
      const j = await res.json();
      alert(j.error || 'Failed');
    }
  }

  if (!data) return <div>Loading...</div>;

  return (
    <div style={{ border:'1px solid #ccc', padding:10 }}>
      <button onClick={onClose}>Close</button>
      <h3>{data.post.title}</h3>
      <div>By {data.post.display_name || data.post.username} at {data.post.created_at}</div>
      <p>{data.post.body}</p>

      <h4>Comments</h4>
      <ul>
        {data.comments.map(c => (
          <li key={c.id}>{c.display_name || c.username}: {c.body}</li>
        ))}
      </ul>

      <form onSubmit={addComment}>
        <input placeholder="comment" value={comment} onChange={e=>setComment(e.target.value)} />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
