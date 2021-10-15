import React from 'react';
import { Row } from 'react-bootstrap';
import Product from '../component/product/Product';
import useProducts from '../hooks/useProducts';

const Products = () => {

    const [products] = useProducts();
    return (
        <div>
            <Row xs={1} md={3} className="container mx-auto g-4">
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </Row>

        </div>
    );
};

export default Products;