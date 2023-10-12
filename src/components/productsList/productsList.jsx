import ProductCard from "../productCard";
import { ProductsContainer } from "./styled";

 
const ProductsList = ({ products, category }) => {
  const categoryProducts = category
    ? products.filter((product) => {
        return product.categories.includes(category);
      })
    : null;

  const prodsArray = categoryProducts || products || [];

  return (
    <ProductsContainer>
      {  
        prodsArray.map((product) => {
          return (
            <ProductCard key={product.code_color} product={product} />
          );
        })
      }
    </ProductsContainer>
  );
};

export default ProductsList;
