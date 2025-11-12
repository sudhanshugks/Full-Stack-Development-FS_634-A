const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:5000/api';
export const headers = () => ({
  ...(localStorage.token ? { Authorization: `Bearer ${localStorage.token}` } : {})
});
export default API_BASE;
