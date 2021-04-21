import axios from 'axios';

const gitCall = axios.create({
  baseURL: "https://api.github.com/gists",
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default gitCall;
