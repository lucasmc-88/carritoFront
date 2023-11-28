import React, { useEffect, useState } from 'react';
import CategoryTable from '../components/CategoryTable';
import CreateCategoryForm from '../components/CreateCategoryForm';
import UpdateCategory from '../components/UpdateCategory';
import CategoryList from '../components/CategoryList';

const Category = () => {

    return (
        <div>
            <CategoryList/>
            <CreateCategoryForm />
        </div>
    );
};

export default Category;


