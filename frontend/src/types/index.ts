export type TSize = {
  available: boolean
  size: string
  _id: string
}

export type TProduct = {
  name: string
  images: string[]
  _id: string
  onSale: boolean
  description: string
  quantity: number
  price: number
  oldPrice: number
  discount: number
  categories: string[]
  colors: string[]
  size: TSize
  selectedSize: string
  sizes: TSize[]
  inStock: boolean
}

export type TCurrentUser = {
  _id: string
  username: string
  email: string
  isAdmin: boolean
  password?: string
  passwordChangedAt?: Date
  createdAt: Date
  updatedAt: Date
  accessToken?: string
}

export type TOrder = {
  userId: string
  products: {
    productId: string
    quantity: number
  }[]
  amount: number
  address: {
    city: string
    state: string
    line1: string
    line2: string
    postal_code: string
    country: string
  }
  status?: string
  _id?: string
  createdAt?: string
  updatedAt?: string
}
