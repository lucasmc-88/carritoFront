import React, { useState, useEffect } from 'react';
import CustomizedTables from '../../shared/components/CustomizedTables';
//import OrderAddProduct from './OrderAddProduct';

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    const header = ['OrdenID','ProductoID', 'Productos', 'Descripcion', 'Cantidad', 'Precio', 'Funciones'];
    const { CustomizedOrderList } = CustomizedTables;

    useEffect(() => {
        return () => {
            fetchOrders();
        };
        
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/orders');
            const data = await response.json();
            console.log(data);
            setOrders(data);
        } catch (error) {
            console.error('Error al obtener las órdenes', error);
        }
    };

    if (!orders) {
        return <p>Cargando...</p>;
    }


    const handleDeleteProduct = async (orderId, productId) => {
        try {
            await fetch(process.env.REACT_APP_BACKEND_URL + `/orders/${orderId}/deleteproductbyid/${productId}`, {
                
                method: 'DELETE',

            });
    
            fetchOrders();
        } catch (error) {
            console.error('Error al eliminar la orden', error);
        }
    };

    const handleDeleteOrder = async (orderId) => {
        try {
            await fetch(process.env.REACT_APP_BACKEND_URL + `/orders/${orderId}`, {
                
                method: 'DELETE',

            });

            fetchOrders();
        } catch (error) {
            console.error('Error al eliminar la orden', error);
        }
    };
    return (
        <div>
            <h2>Lista de Órdenes</h2>
            <CustomizedOrderList header={header} rows={Array.isArray(orders) ? orders : []} onDeleteProduct={handleDeleteProduct} onDeleteOrder={handleDeleteOrder} onEdit={'b'}/>
           
        </div>
    );
};

export default OrderList;