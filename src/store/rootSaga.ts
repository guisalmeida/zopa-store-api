import { all, call } from 'typed-redux-saga'

import { productsSaga } from './sagas/productsSaga'
import { userSaga } from './sagas/userSaga'

// generator function
export function* rootSaga() {
  yield* all([call(productsSaga), call(userSaga)])
}
