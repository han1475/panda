/**
 * Changed by han on 16/9/9.
 */
import api from '../index.js'
export default {
  createToken(username,password){
    return api.post('tokens',{username,password});
  }
}
