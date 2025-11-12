import React, { useEffect, useState } from 'react';
import API from '../api';
import PostView from './PostView';

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(()=> {
    fetch(API.base + '/posts').then(r=>r.json()).then(setPosts);
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map(p => (
          <li key={p.id}>
            <a href="#" onClick={(e)=>{e.preventDefault(); setSelected(p.id);}}>{p.title}</a>
            <span> — by {p.display_name || p.username}</span>
          </li>
        ))}
      </ul>
      {selected && <PostView id={selected} onClose={()=>setSelected(null)} />}
    </div>
  );
}
