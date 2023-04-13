// const Path = require('path');

module.exports = {
  register({options}){
    global.Aloop.middleware = () => require('./reader/middleware');
  },
  
  boot({app}) {}
};
