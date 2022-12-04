/*
  Modulo para Guardar datos de usuarios
*/

const Users = (() => {
  const resource = "https://jsonplaceholder.typicode.com/users";

  return {
    get : async () => {
      return await fetch(resource).then(x => x.json())
    },
    create : async (data) => {
      return await fetch(resource, {
        type : 'POST',
        body : JSON.stringify(data)
      }).then(x => x.json())
    }
  }
})();