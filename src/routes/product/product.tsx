import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { setIsCartOpen, addToCart } from '../../store/actions/cartActions'
import {
  selectAllProducts,
  selectIsLoading,
} from '../../store/selectors/productsSelectors'
import { selectCartProducts } from '../../store/selectors/cartSelectors'

import Spinner from '../../components/spinner/spinner'

import { ProductContainer } from './styled'
import { TProduct } from '../../types'

type TProductRouteParams = {
  category: string
}

const Product = () => {
  const dispatch = useDispatch()
  const { category } = useParams<
    keyof TProductRouteParams
  >() as TProductRouteParams

  const isLoading: boolean = useSelector(selectIsLoading)
  const allProducts: TProduct[] = useSelector(selectAllProducts)
  const cartProducts: TProduct[] = useSelector(selectCartProducts)

  const [prods, setProds] = useState(allProducts)
  const [selectedSize, setSelectedSize] = useState('')
  const [sizeError, setSizeError] = useState(false)

  const productId = window.location.pathname.split('/')[2]
  const product = prods.find(product => product.code_color === productId)

  useEffect(() => {
    setProds(allProducts)
  }, [category, allProducts])

  const handleSize = (sku: string): void => {
    if (sku === selectedSize) {
      setSelectedSize('')
      return
    }
    product ? (product.selectedSize = sku) : ''
    setSelectedSize(sku)
    setSizeError(false)
  }

  const handleAddToCart = (): void => {
    if (!product) return
    if (!selectedSize) {
      return setSizeError(true)
    }

    dispatch(setIsCartOpen(true))
    dispatch(addToCart(cartProducts, product))
    setSelectedSize('')
  }

  return (
    <ProductContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <figure className="product__image">
            {product?.images.map((image, index) => (
              <img
                src={
                  image ||
                  'https://via.placeholder.com/470x594/FFFFFF/?text=Image+Not+Found'
                }
                alt={product?.name}
                title={product?.name}
                key={index}
              />
            ))}
          </figure>

          <div className="product__content">
            <h3 className="product__name">{product?.name}</h3>
            <div className="product__pricing">
              {product?.on_sale && (
                <span className="product__price product__price--old">
                  {product?.regular_price}
                </span>
              )}
              <span className="product__price">{product?.actual_price}</span>
              {/* <span className="product__price product__price--installments">
                or {product?.installments}
              </span> */}
            </div>

            <div className="product__sizes">
              <p className="product__description">Tamanhos disponíveis:</p>

              {sizeError && (
                <p className="product__description product__description--warning">
                  É necessário escolher um tamanho!
                </p>
              )}

              <div className="product__btn-group">
                {product?.sizes.map(
                  (productSize, index) =>
                    productSize.available && (
                      <button
                        key={index}
                        type="button"
                        className={`product__filter ${
                          selectedSize === productSize.sku
                            ? 'product__filter--selected'
                            : ''
                        }`}
                        onClick={() => {
                          handleSize(productSize.sku)
                        }}
                      >
                        {productSize.size}
                      </button>
                    ),
                )}
              </div>
            </div>

            <div className="product__actions">
              <button
                type="button"
                className="product__add-to-cart"
                onClick={handleAddToCart}
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        </>
      )}
    </ProductContainer>
  )
}

export default Product
