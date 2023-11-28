import React, { useState, useEffect } from 'react';
import { Select, MenuItem, TextField, Button, Box, FormControl, InputLabel } from '@mui/material';
import OrderList from './OrderList';
import CreateOrder from './CreateOrder';

const OrderAddProduct = () => {
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState('');
    const [productId, setProductId] = useState('');
    const [quantity, setQuantity] = useState('');

    useEffect(() => {
        // Fetch the list of orders when the component mounts
        const fetchOrders = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/orders');
                const data = await response.json();
                setOrders(data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, []);

    const handleAddProduct = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/orders/${selectedOrder}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    products: [{ productId, quantity }],
                }),
            });

            const data = await response.json();
            console.log('Product added successfully:', data);
        } catch (error) {
            console.error('Error adding product:', error);
        }
        window.location.reload();
    };

    return (
        <Box p={2}>
            <h2>Add Product to Order</h2>
            <FormControl fullWidth>
                <InputLabel>Select Order</InputLabel>
                <Select
                    value={selectedOrder}
                    onChange={(e) => setSelectedOrder(e.target.value)}
                >
                    <MenuItem value="" disabled>Select an order</MenuItem>
                    {orders.map((order) => (
                        <MenuItem key={order._id} value={order._id}>
                            Order {order._id}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TextField
                fullWidth
                label="Product ID"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
            />
            <br />
            <br />
            <br />
            <Button
                onClick={handleAddProduct}
                variant="contained"
                color="primary"
                disabled={!selectedOrder}
            >
                Add Product
            </Button>
            <CreateOrder />
            <OrderList />
        </Box>
    );
};

export default OrderAddProduct;
