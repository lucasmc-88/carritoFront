import React, { useState } from 'react';

const CreateCategoryForm = () => {
    const [categoryName, setCategoryName] = useState('');

    const handleCreateCategory = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/categories', 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify([{ name: categoryName }]),
            });

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error al crear la categoría:', error);
        }
        window.location.reload();
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Nombre de la categoría"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
            />
            <button onClick={handleCreateCategory}>Crear Categoría</button>
        </div>
    );
};

export default CreateCategoryForm;
