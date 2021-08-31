import "./styles.css";

type Props ={
  price:number;
}

const ProductPriceCard = ({ price } : Props) => {
  return (
    <>
      <div className="product-price-container">
        <span>R$</span>
        <h3>{price}</h3>
      </div>
    </>
  );
};
export default ProductPriceCard;
