var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
var config = require('./index')
var port = 8080;
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  port:port,
  api:'"http://localhost:3000/api/"',
  //请修改为你自己的畅言配置,
  changyanAppId:'"cysXq63Ld"',
  changyanConf:'"prod_90c17ff48c610f5dca0d6542a9111148"'
})
