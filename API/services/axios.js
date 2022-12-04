const axios = require('axios');

const DOMAIN = 'https://jsonplaceholder.typicode.com';

const instance = axios.create({
  baseURL : DOMAIN,
});

const adapter = {
  get : url => instance.get(url),
  post : (url, body) => instance.post(url, body),
  put : (url, body) => instance.put(url, body),
  delete : url => instance.delete(url)
}

module.exports = adapter;
