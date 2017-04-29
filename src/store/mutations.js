export const setProducts = (state, products) => {
  state.products = products
}

export const setCart = (state, items) => {
  state.cart = items
}

export const appendToCart = (state, { product, quantity }) => {
  const existing = state.cart.find((item) => {
    return item.product.id === product.id
  })

  if (existing) {
    existing.quantity++
  } else {
    state.cart.push({
      product,
      quantity: quantity
    })
  }
}

export const removeFromCart = (state, productId) => {
  const existing = state.cart.find((item) => {
    return item.product.id === productId
  })

  if (existing.quanitity > 1) {
    existing.quanitity--
  } else {
    state.cart = state.cart.filter((item) => {
      return item.product.id !== productId
    })
  }
}

export const removeAllFromCart = (state) => {
  state.cart = []
}
