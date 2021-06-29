import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3306';


const postPostIt = async (values) => {
  console.log(values);
  return await axios.post('/api/.....', values).then((res) => res.data);
};

const postLogin = async (values) => {
  console.log(values);
  return await axios.post('/app_login', values).then((res) => res.data);
};

export { postPostIt, postLogin };