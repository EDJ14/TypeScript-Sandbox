import axios, { AxiosResponse } from 'axios';

axios.get('http://localhost:3000/users').then((res: AxiosResponse) => {
  console.log(res.data);
});
