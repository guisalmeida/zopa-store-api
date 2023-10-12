import ProductsList from "../../components/productsList";
import Spinner from "../../components/spinner/spinner";
import SHOP_DATA from '../../../shop-data.js'

const Categories = () => {
  const products = SHOP_DATA
  const isLoading = false

  return isLoading ? <Spinner/> : 
    (<ProductsList products={products} category={undefined} />)
};

export default Categories;
