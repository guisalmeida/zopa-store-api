import { combineReducers } from 'redux'
import { userReducer } from './reducers/userReducer'
import { productsReducer } from './reducers/productsReducer'
import { searchReducer } from './reducers/searchReducer'
import { cartReducer } from './reducers/cartReducer'

export const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  search: searchReducer,
  cart: cartReducer,
})
