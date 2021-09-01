import { ReactComponent as SetaIcon } from 'assets/images/Seta.svg';
import ProductPriceCard from 'components/ProductPriceCard';

import './styles.css';

const ProductDetails = () => {
    return(
        <div className="product-details-container">
            <div className="base-card product-details-card">
                <div className="goback-container">
                    <SetaIcon />
                    <h2>Voltar</h2>
                </div>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="img-container">
                            <img src="https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg" alt="Nome do produto"/>
                        </div>
                        <div className="name-price-container">
                            <h1>Nome do Produto</h1>
                            <ProductPriceCard price={2190.0} />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="description-container">
                            <h2>Descrição  do produto</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit similique iste voluptatibus omnis, voluptatum accusantium perferendis dolore ut optio odit exercitationem corporis nobis cum sed laborum unde eligendi perspiciatis veritatis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;