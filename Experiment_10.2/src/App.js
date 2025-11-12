import React, { useState } from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import PostList from './components/PostList';
import NewPost from './components/NewPost';

function App() {
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem('user');
    return raw ? JSON.parse(raw) : null;
  });

  function handleLogin(u, token) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(u));
    setUser(u);
  }
  function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Capstone Blog</h1>
      {user ? (
        <div>
          <div>Signed in as {user.display_name} <button onClick={logout}>Logout</button></div>
          <NewPost onPosted={() => window.location.reload()} />
        </div>
      ) : (
        <div style={{ display:'flex', gap:20 }}>
          <Signup onAuth={handleLogin} />
          <Login onAuth={handleLogin} />
        </div>
      )}
      <hr />
      <PostList />
    </div>
  );
}

export default App;
