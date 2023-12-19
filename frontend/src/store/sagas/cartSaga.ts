import { takeLatest, all, call, put } from 'typed-redux-saga'
import axios, { AxiosError } from 'axios'
import { toast } from 'react-toastify'

import {
  createOrderSuccess,
  createOrderFailed,
  TCreateOrderFailed,
  TCreateOrderStart,
} from '../actions/cartActions'
import { createOrder } from '../../utils/api'

export function* createOrderSaga({ payload }: TCreateOrderStart) {
  try {
    const res = yield* call(createOrder, payload)

    if (axios.isAxiosError(res)) {
      yield* put(createOrderFailed(res.response?.data as AxiosError))
    } else if (res.data) {
      yield* call(console.log, res.data)
      const newOrders = [res.data]
      yield* put(createOrderSuccess(newOrders))
    }
  } catch (error) {
    yield* put(createOrderFailed(error as Error))
  }
}

export function* onCreateOrderStart() {
  yield* takeLatest('CREATE_ORDER_START', createOrderSaga)
}

export const showErrorToast = (error: Error) => {
  return toast.error(error.message, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: true,
    pauseOnHover: false,
    draggable: false,
  })
}

export function* showError({ payload }: TCreateOrderFailed) {
  yield* call(showErrorToast, payload)
}

export function* onCreateOrderFailed() {
  yield* takeLatest('CREATE_ORDER_FAILED', showError)
}

export function* cartSaga() {
  yield* all([call(onCreateOrderStart), call(onCreateOrderFailed)])
}
