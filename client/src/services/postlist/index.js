/**
 * Changed by han on 16/9/7.
 */
import api from '../index.js'
export default {
  getPostList(params){
    return api.get('articles',params)
  }
}
