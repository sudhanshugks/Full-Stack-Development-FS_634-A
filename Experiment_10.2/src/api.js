const API = {
  base: (process.env.REACT_APP_API_BASE || 'http://localhost:4000') + '/api',
  token: () => localStorage.getItem('token'),
  headers: () => ({
    'Content-Type': 'application/json',
    ...(localStorage.getItem('token') ? { Authorization: 'Bearer ' + localStorage.getItem('token') } : {})
  })
};

export default API;
