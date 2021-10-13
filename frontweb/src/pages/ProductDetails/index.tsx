import { ReactComponent as SetaIcon } from "assets/images/Seta.svg";
import axios from "axios";
import ProductPriceCard from "components/ProductPriceCard";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Product } from "types/product";
import { BASE_URL } from "util/requests";

import "./styles.css";

type urlParams = {
    productId: string;
}

const ProductDetails = () => {
  const { productId } = useParams<urlParams>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    axios.get<Product>(`${BASE_URL}/products/${productId}`).then((res) => {
      setProduct(res.data);
    });
  }, [productId]);

  return (
    <div className="product-details-container">
      <div className="base-card product-details-card">
        <Link to="/products">
          <div className="goback-container">
            <SetaIcon />
            <h2>Voltar</h2>
          </div>
        </Link>
        <div className="row">
          <div className="col-xl-6">
            <div className="img-container">
              <img src={product?.imgUrl} alt={product?.name} />
            </div>
            <div className="name-price-container">
              <h1>{product?.name}</h1>
              {product && <ProductPriceCard price={product?.price} />}
            </div>
          </div>
          <div className="col-xl-6">
            <div className="description-container">
              <h2>Descrição do produto</h2>
              <p>{product?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
