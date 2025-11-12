import React, { useEffect, useState } from 'react';
import API_BASE, { headers } from '../api';
import NewPost from './NewPost';
import PostItem from './PostItem';

export default function Feed() {
  const [posts, setPosts] = useState([]);

  async function load() {
    const res = await fetch(API_BASE + '/posts', { headers: headers() });
    setPosts(await res.json());
  }

  useEffect(() => { load(); }, []);

  return (
    <div>
      <NewPost onPosted={load} />
      {posts.map(p => <PostItem key={p._id} post={p} onUpdate={load} />)}
    </div>
  );
}
