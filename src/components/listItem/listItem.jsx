import { priceToNumber, priceToStringBr } from "../../utils/currency";
import ListQuantity from "../listQuantity";

import {
  ListItemContainer,
  ListItemFigure,
  ListItemInfo,
  ListItemPrices,
  RemoveButton,
} from "./styled";

 
const ListItem = ({ item }) => {
  const cartItems = []   
  const handleDelete = () => console.log("delete");;

   
  const { size } = item.sizes.find(
    (size) => size.sku === item.selectedSize
  );

  return (
    <ListItemContainer>
      <ListItemFigure>
        <img
          src={
            item?.image ||
            "https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indispon%C3%ADvel"
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

        {item?.quantity && <ListQuantity item={item} />}

        {item?.quantity && (
          <RemoveButton type="button" onClick={handleDelete}>
            Remover
          </RemoveButton>
        )}
      </ListItemInfo>

      <ListItemPrices>
        {item?.on_sale && (
          <p className="list__price list__price--old">
            {priceToStringBr(
              priceToNumber(item?.regular_price) * item?.quantity
            )}
          </p>
        )}
        <p className="list__price">
          {priceToStringBr(priceToNumber(item?.actual_price) * item?.quantity)}
        </p>
        {/* <p className="list__price list__price--installments">
          {item?.installments}
        </p> */}
      </ListItemPrices>
    </ListItemContainer>
  );
};

export default ListItem;
