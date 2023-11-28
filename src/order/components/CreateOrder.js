// OrderForm.js
import React, { useState, useEffect } from 'react';

const OrderForm = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState(1);

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


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crear la orden
    const orderData = {
      products: [
        {
          productId: selectedProduct,
          quantity: quantity,
        },
      ],
    };
    
    try {
      const response = await fetch('http://localhost:5000/api/orders/createOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error('Error al crear la orden');
      }

      const responseData = await response.json();
      console.log('Orden creada:', responseData.newOrder);
    } catch (error) {
      console.error('Error al crear la orden:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Selecciona un producto:
        <select value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)}>
          <option value="" disabled>Selecciona un producto</option>
          {Array.isArray(products) && products.length > 0 ? (
            products.map(product => (
              <option key={product._id} value={product._id}>{product.name}</option>
            ))
          ) : (
            <option value="" disabled>No hay productos disponibles</option>
          )}
        </select>
      </label>
      <br />
      <label>
        Cantidad:
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      </label>
      <br />
      <button type="submit">Crear Orden</button>
    </form>
  );
};

export default OrderForm;
