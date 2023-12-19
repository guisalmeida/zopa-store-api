import { useDispatch, useSelector } from 'react-redux'
import { clearFromCart } from '../../store/actions/cartActions'

import { priceToStringBr } from '../../utils/currency'
import { selectCartProducts } from '../../store/selectors/cartSelectors'
import { TProduct } from '../../types'

import ListQuantity from '../listQuantity'

import {
  ListItemContainer,
  ListItemFigure,
  ListItemInfo,
  ListItemPrices,
  RemoveIcon,
} from './styled'

type ListItemProps = {
  item: TProduct
  mode: string
}

const ListItem = ({ item, mode }: ListItemProps): React.JSX.Element => {
  const dispatch = useDispatch()
  const cartProducts = useSelector(selectCartProducts)
  const handleDelete = () => dispatch(clearFromCart(cartProducts, item))

  const { size } = item.selectedSize
    ? item.sizes.find(size => size._id === item.selectedSize) || {
        size: undefined,
      }
    : { size: undefined }

  return (
    <ListItemContainer>
      <ListItemFigure>
        <img
          src={
            item?.images[0] ||
            'https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indispon%C3%ADvel'
          }
          alt={item?.name}
        />
      </ListItemFigure>

      <ListItemInfo>
        <h3 className="list__title">{item?.name}</h3>

        {size && (
          <p className="list__size">
            <span>{`Tam.: ${size}`}</span>
          </p>
        )}

        {mode === 'cart' && <ListQuantity item={item} />}
      </ListItemInfo>

      <ListItemPrices>
        {mode === 'cart' && (
          <button type="button" onClick={handleDelete}>
            <RemoveIcon />
          </button>
        )}
        {item?.onSale && (
          <p className="list__price list__price--old">
            {priceToStringBr(item.oldPrice * item.quantity)}
          </p>
        )}
        <p className="list__price">
          {priceToStringBr(item.price * item.quantity)}
        </p>
        {/* <p className="list__price list__price--installments">
          {item?.installments}
        </p> */}
      </ListItemPrices>
    </ListItemContainer>
  )
}

export default ListItem
