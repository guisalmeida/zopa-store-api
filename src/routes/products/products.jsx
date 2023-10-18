import { useParams } from "react-router-dom";

import ProductsList from "../../components/productsList";
import Spinner from "../../components/spinner/spinner";

import SHOP_DATA from '../../../shop-data.js'

const Category = () => {
  const { category } = useParams();
  const products = SHOP_DATA
  const isLoading = false
  
  return isLoading ? <Spinner/> : 
    (<ProductsList products={products} category={category} />)
};

export default Category;
