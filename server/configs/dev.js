/**
 * Changed by han on 16/8/7.
 */
module.exports = {
  env:'development',
  debug:true,
  mongoConfig: {
    url: 'mongodb://localhost:27017/panda-dev',
    opts:{
      user:'',
      pass:''
    }
  },
  'jwt': {
    'cert': 'panda-dev'
  },
}
