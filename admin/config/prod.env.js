var fs = require('fs');
var merge = require('webpack-merge')
config = {
  NODE_ENV: '"production"',
  api:'"http://118.184.11.199:3000/api/"'
}

if(process.env.NODE_ENV === 'production'){
  if(fs.existsSync(__dirname+'/private.js')){
    config = merge(config,require('./private.js'));
  }
}
module.exports = config

