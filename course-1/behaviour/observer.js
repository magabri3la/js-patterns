/*
  Tambien conocido como el patron de publish/suscrive 
  Estos dos objetos podran interactuar entre si y escuchan las modificaciones
  que ocurren en uno u otro y podrán ejecutar logica tras dicho evento
*/

const user = new User();

const init = () => {
  user.on('login', userLoggedIn);
  user.on('login', retrieveInitData);
  //Aqui podemos llamar todas las funciones que 
};

const userLoggedIn = () => {
  // usuario inicia sesión
};

app.init();

const login = login => () => {
  // Logica de inicio de sesion 
  user.trigger('login');
}

login();