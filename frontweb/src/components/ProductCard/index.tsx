import "./styles.css";
import ProductImg from "assets/images/product.png";
import ProductPriceCard from "components/ProductPriceCard";

const ProductCard = () => {
  return (
    <>
      <div className="base-card product-card">
        <div className="card-top-container">
            <img src={ProductImg} alt="Nome do produto" />
        </div>
        <div className="card-botton-container">
            <h6>Nome do produto</h6>
            <ProductPriceCard />
        </div>
      </div>
    </>
  );
};
export default ProductCard;
