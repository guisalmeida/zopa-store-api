import { Link, useParams } from "react-router-dom";
import { ProductsCategories } from "./styled";
import SHOP_DATA from '../../../shop-data.js'

const CategoriesBar = () => {
  const products = SHOP_DATA
  const categoriesSet = new Set();
  const { category } = useParams();

  products.forEach((product) => {
    product.categories.forEach((cat) => categoriesSet.add(cat));
  });

  return (
    <ProductsCategories>
      <ul>
        {Array.from(categoriesSet).sort().map((cat, index) => {
          return (
            <li key={index}>
              <Link
                to={`${cat}`}
                className={category === cat ? "selected" : ""}
                style={cat === "sale" ? { color: "red" } : null}
              >
                {cat}
              </Link>
            </li>
          );
        })}
      </ul>
    </ProductsCategories>
  );
};

export default CategoriesBar;
