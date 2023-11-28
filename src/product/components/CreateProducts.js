import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const CreateProduct = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');

    const handleCreateProduct = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify([{
                    name,
                    description,
                    price,
                    stock,
                }]),
            });

            if (!response.ok) {
                throw new Error('Error al crear el producto***');
            }

            const responseData = await response.json();
            console.log('Producto creado:', responseData.createdProducts);
            window.location.reload();

        } catch (error) {
            console.error('Error al crear el producto:', error.message);
        }
    };

    return (
        <div>
            <h2>Crear Producto</h2>
            <form>
                <TextField
                    label="Nombre"
                    variant="outlined"
                    fullWidth
                    size="small"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Descripción"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    size="small"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Precio"
                    variant="outlined"
                    fullWidth
                    type="number"
                    size="small"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Stock"
                    variant="outlined"
                    fullWidth
                    type="number"
                    size="small"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                    margin="normal"
                />
                <Button variant="contained" color="primary" onClick={handleCreateProduct}>
                    Crear Producto
                </Button>
            </form>
        </div>
    );
};

export default CreateProduct;
