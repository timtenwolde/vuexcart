import axios from 'axios'
export const getProducts = ({ commit }) => {
  return axios.get('http://vuexcartlaravel.dev/api/products').then((response) => {
    commit('setProducts', response.data)
    return Promise.resolve()
  })
}

export const addProductToCart = ({ commit }, { product, quantity }) => {
  commit('appendToCart', { product, quantity })

  return axios.post('http://vuexcartlaravel.dev/api/cart', {
    product_id: product.id,
    quantity
  })
}

export const getCard = ({ commit }) => {
  return axios.get('http://vuexcartlaravel.dev/api/cart').then((response) => {
    commit('setCart', response.data)
    return Promise.resolve()
  })
}

export const removeProductFromCart = ({ commit }, productId) => {
  commit('removeFromCart', productId)
  return axios.delete(`http://vuexcartlaravel.dev/api/cart/${productId}`)
}

export const removeAllProductsFromCart = ({ commit }) => {
  commit('removeAllFromCart')
  return axios.delete('http://vuexcartlaravel.dev/api/cart')
}

// remove all products
