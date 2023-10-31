import { createContext, useEffect, useReducer, useState } from 'react'
import { priceToNumber } from '../utils/currency'

export const CartContext = createContext({
  cartProducts: [],
  setCartProducts: () => [],
  isCartOpen: false,
  setIsCartOpen: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
})

const INITIAL_STATE = {
  cartProducts: [],
  isCartOpen: false,
  cartCount: 0,
  cartTotal: 0,
}

const cartReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'SET_CART_PRODUCTS':
      return {
        ...state,
        ...payload,
      }
    case 'SET_IS_CART_OPEN':
      return {
        ...state,
        isCartOpen: payload,
      }
    default:
      throw new Error(`
        Unhandled type ${type} in cartReducer!
      `)
  }
}

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
  const [{ cartCount, cartProducts, cartTotal, isCartOpen }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE)

  const setIsCartOpen = bool =>
    dispatch({ type: 'SET_IS_CART_OPEN', payload: bool })

  const setCartProducts = newCartItems => {
    const newCartTotal = newCartItems.reduce((total, cartItem) => {
      return total + priceToNumber(cartItem.actual_price) * cartItem.quantity
    }, 0)

    const newCartCount = newCartItems.reduce((total, cartItem) => {
      return (total += cartItem.quantity)
    }, 0)

    dispatch({
      type: 'SET_CART_PRODUCTS',
      payload: {
        cartCount: newCartCount,
        cartTotal: newCartTotal,
        cartProducts: newCartItems,
      },
    })
  }

  const addToCart = product => {
    const newCartItems = addCartItem(cartProducts, product)
    setCartProducts(newCartItems)
  }

  const removeFromCart = product => {
    const newCartItems = removeCartItem(cartProducts, product)
    setCartProducts(newCartItems)
  }

  const clearFromCart = product => {
    const newCartItems = clearCartItem(cartProducts, product)
    setCartProducts(newCartItems)
  }

  const value = {
    cartProducts,
    setCartProducts,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    cartCount,
    removeFromCart,
    clearFromCart,
    cartTotal,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
