import React, { useState, useEffect } from 'react';
import CustomizedTables from '../../shared/components/CustomizedTables';


const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {

        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/categories');
            const data = await response.json();
            setCategories(data.category);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const handleDeleteCategory = async (categoryId) => {
        try {
            const response = await fetch(process.env.REACT_APP_BACKEND_URL +`/categories/${categoryId}`, {
                method: 'DELETE',
            });

            fetchCategories();
        } catch (error) {
            console.error('Error en la solicitud de eliminación:', error);
        }
    };

    const header = ['ID', 'Nombre', "Funciones"];
    const { CustomizedCategoryList } = CustomizedTables

    const rows = categories.map(category => ({
        _id: category._id,
        name: category.name,
    }));

    return (
        <CustomizedCategoryList
            header={header}
            rows={rows}
            onDeleteCategory={handleDeleteCategory}
            onEdit={() => { }}
        />
    );
};

export default CategoryList;
