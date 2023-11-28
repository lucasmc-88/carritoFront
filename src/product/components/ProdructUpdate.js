import React, { useState, useEffect } from 'react';

const ProdructUpdate = () => {
    const [products, setProducts] = useState([]);
    const [selectedProductId, setSelectedProductId] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [stock, setStock] = useState('');

    useEffect(() => {
        fetchAllProducts();
    }, []);

    const fetchAllProducts = async () => {
        try {
            const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/products');
            const data = await response.json();
            setProducts(data.products);
        } catch (error) {
            console.error('Error al obtener la lista de productos', error);
        }
    };

    const handleProductSelect = (productId) => {
        // Aquí estableces el producto seleccionado
        setSelectedProductId(productId);

        // También puedes hacer una solicitud para obtener los detalles del producto seleccionado si es necesario
        fetchProductDetails(productId);
    };

    const fetchProductDetails = async (productId) => {
        try {
            const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/products/${productId}`);
            const data = await response.json();

            // Llenar los estados con los detalles del producto
            setName(data.product.name);
            setDescription(data.product.description);
            setPrice(data.product.price);
            setCategoryId(data.product.categoryId);
            setStock(data.product.stock);
        } catch (error) {
            console.error('Error al obtener detalles del producto', error);
        }
    };

    const handleInputChange = (e) => {
        // Utilizar un solo manejador de cambios para todos los campos del formulario
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'description':
                setDescription(value);
                break;
            case 'price':
                setPrice(value);
                break;
            // Agregar casos para otros campos si es necesario
            default:
                break;
        }
    };

    const handleUpdateProduct = async () => {
        try {
            const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/products/${selectedProductId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    description,
                    price,
                    categoryId,
                    stock,
                }),
            });
            
            fetchProductDetails();
            const data = await response.json();

            console.log('Producto actualizado con éxito', data);
        } catch (error) {
            console.error('Error al actualizar el producto', error);
        }
        window.location.reload();
    };

    return (
        <div>
            <h2>Lista de Productos</h2>
            <select value={selectedProductId} onChange={(e) => handleProductSelect(e.target.value)}>
                <option value="" disabled>
                    Selecciona un producto
                </option>
                {products.map((product) => (
                    <option key={product._id} value={product._id}>
                        {product._id}
                    </option>
                ))}
            </select>

            {selectedProductId && (
                <div>
                    <h2>Editar Producto</h2>
                    <form>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="description"
                            value={description}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="price"
                            value={price}
                            onChange={handleInputChange}
                        />
                        <button type="button" onClick={handleUpdateProduct}>
                            Actualizar Producto
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ProdructUpdate;
