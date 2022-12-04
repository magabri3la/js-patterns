module.exports.get = axios => async (req, res) => {
  const {data} = await axios.get('https://jsonplaceholder.typicode./users');
  res.send(data);
};

module.exports.post = (axios, db, storage, auth) => async (req, res) => {
  const {data} = await axios.post('https://jsonplaceholder.typicode./users');
  res.send(data);
};