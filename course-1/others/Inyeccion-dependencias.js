/*
Se basa en entregar el control de los metodos a ejecutar a una libreria que vamos a inyectar completamente transparente y tambien eliminar todos los require que vemos al inicio de nuestra app.
*/

const express = require('express');
const axios = require('axios');
const { get } = require('./handlers');
const app = express();
const port = 3000;

app.get('/', get(axios))

app.listen(port, () => console.log(`Example app listering on port ${port}`));