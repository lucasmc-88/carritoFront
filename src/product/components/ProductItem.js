import React from 'react';
import ProductList from './ProductList';
import ProdructUpdate from './ProdructUpdate';
import CreateProduct from './CreateProducts';

const ProductItem = props => {
    return (
        <div>
            <h1>Mi Tienda</h1>
            <CreateProduct/>
            <ProdructUpdate/>
            <ProductList />
        </div>
    );
};

export default ProductItem;

