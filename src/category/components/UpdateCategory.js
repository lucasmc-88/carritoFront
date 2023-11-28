import React, { useState, useEffect } from 'react';

const UpdateCategory = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(''); // Inicializar con una cadena vacía
    const [name, setName] = useState('');

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/categories');
                const data = await response.json();
                setCategories(data.category);
            } catch (error) {
                console.error('Error al obtener las categorías', error);
            }
        };

        fetchCategories();
    }, []);

    const handleCategoryChange = (e) => {
        setSelectedCategoryId(e.target.value);
    };

    useEffect(() => {
        const fetchData = async () => {
            if (selectedCategoryId) {
                try {
                    const response = await fetch(process.env.REACT_APP_BACKEND_URL +  `/categories/updatecategory/${selectedCategoryId}`);
                    const data = await response.json();
                    setName(data.category.name);
                } catch (error) {
                    console.error('Error al obtener la categoría', error);
                }
            }
        };

        fetchData();
    }, [selectedCategoryId]);

    const handleUpdateCategory = async () => {
        try {
            const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/categories/updatecategory/${selectedCategoryId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name }),
            });

            if (response.ok) {
                console.log('Categoría actualizada con éxito');
            } else {
                console.error('Error al actualizar la categoría');
            }
        } catch (error) {
            console.error('Error en la solicitud de actualización', error);
        }
    };

    return (
        <div>
            <h2>Actualizar Categoría</h2>
            <label>Selecciona una categoría:</label>
            <select value={selectedCategoryId} onChange={handleCategoryChange}>
                <option value="" disabled>Selecciona una categoría</option>
                {categories.map(category => (
                    <option key={category._id} value={category._id}>
                        {category.name}
                    </option>
                ))}
            </select>

            {selectedCategoryId && (
                <div>
                    <label>Nombre de la categoría:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <button onClick={handleUpdateCategory}>Actualizar Categoría</button>
                </div>
            )}
        </div>
    );
};

export default UpdateCategory;
