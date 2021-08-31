import "./styles.css";
import ProductPriceCard from "components/ProductPriceCard";
import { Product } from "types/product";

type Props ={
  product : Product;
}

const ProductCard = ( { product } : Props) => {
  return (
    <>
      <div className="base-card product-card">
        <div className="card-top-container">
            <img src={product.imgUrl} alt={product.name} />
        </div>
        <div className="card-botton-container">
            <h6>{product.name}</h6>
            <ProductPriceCard price = {product.price}/>
        </div>
      </div>
    </>
  );
};
export default ProductCard;
