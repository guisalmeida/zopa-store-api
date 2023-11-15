export type TProduct = {
  image: string
  images: string[]
  name: string
  code_color: string
  on_sale: boolean
  regular_price: string
  actual_price: string
  discount_percentage: string
  categories: string[]
  quantity: number
  installments: string
  size: string
  selectedSize: string
  sizes: {
    available: boolean
    size: string
    sku: string
  }[]
}
