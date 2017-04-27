import axios from 'axios'
export const getProducts = ({ commit }) => {
  return axios.get('http://vuexcartlaravel.dev/api/products').then((response) => {
    commit('setProducts', response.data)
  })
}
// get cart
// add a product
// remove a products
// remove all products
