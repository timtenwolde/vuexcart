export const products = (state) => {
  return state.products
}

export const cart = (state) => {
  return state.cart
}

export const cartItemCount = (state) => {
  return state.cart.reduce((a, b) => {
    return a + b.quantity
  }, 0).toFixed(0)
}

export const cartTotal = (state) => {
  return state.cart.reduce((a, b) => {
    return a + b.product.price * b.quantity
  }, 0).toFixed(2)
}
// cart total
