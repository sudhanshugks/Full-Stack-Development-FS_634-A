import React, { useState, useEffect } from 'react';
import API_BASE, { headers } from '../api';

export default function PostItem({ post, onUpdate }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  useEffect(() => {
    fetch(API_BASE + '/comments/' + post._id).then(r=>r.json()).then(setComments);
  }, [post._id]);

  async function like() {
    await fetch(API_BASE + `/posts/${post._id}/like`, { method: 'POST', headers: headers() });
    onUpdate();
  }

  async function addComment(e) {
    e.preventDefault();
    await fetch(API_BASE + `/comments/${post._id}`, {
      method: 'POST',
      headers: { ...headers(), 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: comment })
    });
    setComment('');
    fetch(API_BASE + '/comments/' + post._id).then(r=>r.json()).then(setComments);
  }

  return (
    <div style={{ border:'1px solid gray', margin:10, padding:10 }}>
      <h4>{post.user?.name}</h4>
      <p>{post.text}</p>
      {post.image && <img src={`http://localhost:5000/uploads/${post.image}`} width="200" alt="" />}
      <div>
        <button onClick={like}>❤️ {post.likes.length}</button>
      </div>
      <form onSubmit={addComment}>
        <input value={comment} onChange={e=>setComment(e.target.value)} placeholder="Write a comment..." />
        <button>Add</button>
      </form>
      {comments.map(c => <div key={c._id}><b>{c.user?.name}:</b> {c.text}</div>)}
    </div>
  );
}
