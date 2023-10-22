import { useState } from 'react'
import Spinner from '../../components/spinner/spinner'
import { ProductContainer } from './styled'

import SHOP_DATA from '../../../shop-data.js'

const Product = () => {
  const isLoading = false
  const [selectedSize, setSelectedSize] = useState(null)
  const [sizeError, setSizeError] = useState(false)

  const products = SHOP_DATA
  const productId = window.location.pathname.split('/')[2]
  const product = products.find(product => product.code_color === productId)

  const handleSize = sku => {
    if (sku === selectedSize) {
      setSelectedSize(null)
      return
    }

    setSelectedSize(sku)
    setSizeError(false)
  }

  const addToCart = () => {
    console.log('addtocart')
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
              <span className="product__price product__price--installments">
                or {product?.installments}
              </span>
            </div>
            <div className="product__sizes">
              <p className="product__description">Choose a size:</p>

              {sizeError && (
                <p className="product__description product__description--warning">
                  You need to choose a size
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
                onClick={addToCart}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </>
      )}
    </ProductContainer>
  )
}

export default Product
