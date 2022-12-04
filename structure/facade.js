/*
  Se utiliza cuando queremos simplificar el llamado a una funcion
*/

const https = require('https');

const get = url => new Promise((resolve, reject) => {
  const urlDivided = url.split('/');
  const host = urlDivided.shift();
  const path = `/${urlDivided.join('/')}`

  const options = {
    hostname : host,
    path : path,
    method : 'GET'
  };

  const req = https.request(options, res => {
    res.setEncoding('utf-8');
    let body = '';
    res.on('data', d => {
      body += d
    });
  
    res.on('end', d => {
      const parsed = JSON.parse(body);
      resolve(parsed);
    });
  });
  
  req.on('error', (e) => {
    reject(e)
  });
  
  req.end();

});

const main = async () => {
  const result = await get('jsonplaceholder.typicode.com/users');
  console.log(result);
}

main();

