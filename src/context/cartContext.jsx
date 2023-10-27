import { createContext, useEffect, useState } from 'react'
import { priceToNumber } from '../utils/currency'

export const CartContext = createContext({
  cartProducts: [],
  setCartProducts: () => [],
  isCartOpen: false,
  setIsCartOpen: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  cartCount: 0,
  setCartCount: () => {},
  cartTotal: 0,
})

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.selectedSize === productToAdd.selectedSize,
  )

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.selectedSize === productToAdd.selectedSize
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    )
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.selectedSize === productToRemove.selectedSize,
  )

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => {
      return cartItem.selectedSize !== productToRemove.selectedSize
    })
  }

  return cartItems.map(cartItem =>
    cartItem.selectedSize === productToRemove.selectedSize
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem,
  )
}

const clearCartItem = (cartItems, productToRemove) => {
  return cartItems.filter(cartItem => {
    return cartItem.selectedSize !== productToRemove.selectedSize
  })
}

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartProducts, setCartProducts] = useState([])

  useEffect(() => {
    const newCartCount = cartProducts.reduce((total, cartItem) => {
      return (total += cartItem.quantity)
    }, 0)

    setCartCount(newCartCount)
  }, [cartProducts])

  useEffect(() => {
    const newCartTotal = cartProducts.reduce((total, cartItem) => {
      return total + priceToNumber(cartItem.actual_price) * cartItem.quantity
    }, 0)

    setCartTotal(newCartTotal)
  }, [cartProducts])

  const addToCart = product =>
    setCartProducts(addCartItem(cartProducts, product))

  const removeFromCart = product =>
    setCartProducts(removeCartItem(cartProducts, product))

  const clearFromCart = product =>
    setCartProducts(clearCartItem(cartProducts, product))

  const value = {
    cartProducts,
    setCartProducts,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    cartCount,
    setCartCount,
    removeFromCart,
    clearFromCart,
    cartTotal,
    setCartTotal,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
