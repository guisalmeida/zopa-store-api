import { Carousel } from "../../components/carousel/carousel";
import ProductsList from "../../components/productsList";
import Spinner from "../../components/spinner/spinner";
import SHOP_DATA from '../../../shop-data.js'

const Home = () => {
  const products = SHOP_DATA
  const isLoading = false

  return (
    <>
      <Carousel />
      
      {isLoading ? <Spinner /> :
        (<ProductsList products={products} category={undefined} />)
      }
    </>
  );
};

export default Home;
