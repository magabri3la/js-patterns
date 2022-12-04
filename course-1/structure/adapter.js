class Api {
  constructor () {
    this.operations = function (url, opts, verb) {
      switch (verb) {
        case 'get':
        // return fetch ...
        case 'post':
          // return fetch ...
        default :
          // return fetch ...
      };
    };
  };
};

class ApiTwo {
  constructor () {
    this.get = function (url, opts) {
      // return fetch...
    };

    this.post = function ( url, opts) {
      // return fetch...
    };
  };
};

class ApiAdapter {
  constructor () {
    const apiTwo = new ApiTwo();

    this.operations = function (url, opts, verb) {
      switch (verb) {
        case 'get':
          return apiTwo.get(url, opts);
        case 'post':
          return apiTwo.post(url, opts);
        default :
          return;
      }
    };
  };
};

const api = new Api();
api.operations('path', { q : 1}, 'GET');

const apiTwo = new ApiTwo();
apiTwo.get('path', { q : 1});

const adapter = new ApiAdapter();
api.operations('path', { q : 1}, 'GET');