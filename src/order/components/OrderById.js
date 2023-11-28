import React, { useEffect, useState } from 'react';
import CustomizedTables from '../../shared/components/CustomizedTables';

const OrderById = () => {
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {CustomizedOrderTables} = CustomizedTables
    const header = ['Productos', 'Descripcion', 'Cantidad', 'Precio'];

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/orders/654827f953300881d000d655');
                if (!response.ok) {
                    throw new Error('Error al obtener la orden');
                }

                const orderData = await response.json();
                console.log(orderData.order + '**************');
                setOrder(orderData.order);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchOrder();
    }, []); 

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!order) {
        return <p>No se encontró la orden</p>;
    }

    return (
        <div>
            <h1>Detalles de la Orden</h1>
            <p>ID de la Orden: {order._id}</p>
            
            <CustomizedOrderTables header={header} rows={order} />
        
        </div>
    );
};

export default OrderById;
