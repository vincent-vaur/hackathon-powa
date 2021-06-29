import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:8000';


const postPostIt = async (values) => {
  return await axios.post('/post_it', values).then((res) => res.data);
};

const postLogin = async (values) => {
  return await axios.post('/api/login', values).then((res) => res.data);
};

export { postPostIt, postLogin };