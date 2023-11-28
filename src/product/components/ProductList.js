import React, { useState, useEffect } from 'react';
import CustomizedTables from '../../shared/components/CustomizedTables';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    const header = ['ID', 'Nombre', 'Descripcion', 'Precio','Categoria', 'Funciones'];
    const { CustomizedProductTables } = CustomizedTables


    useEffect(() => {
        return () => {
            fetchProducts();
        };
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch(process.env.REACT_APP_BACKEND_URL+'/products');
            const data = await response.json();
            console.log(data.products);
            setProducts(data.products);
        } catch (error) {
            console.error('Error al obtener productos:', error);
        }
    };

    const handleDeleteProduct = async (productId) => {
        try {
            await fetch(process.env.REACT_APP_BACKEND_URL+`/products/${productId}`, {
                method: 'DELETE',
            });
                fetchProducts();
        } catch (error) {
            console.error('Error de red:', error.message);
        }
        //window.location.reload();
    };

    return (
        <div>
            <h1>Lista de Productos</h1>
            
            <CustomizedProductTables header={header} rows={Array.isArray(products) ? products : []} onDeleteProduct={handleDeleteProduct} onEdit={'b'}/>
        </div>
    );
};

export default ProductList;
