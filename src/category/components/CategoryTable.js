import React from 'react';
import CategoryItem from './CategoryItem';

const CategoryTable = props => {

    return (
        <div className="center">
            <h1>Datos desde el servidor Node.js:</h1>

            {Array.isArray(props.items) ? (
                <ul>
                    {props.items.map(category => (
                        <CategoryItem
                            key={category.id}
                            name={category.name}
                        />
                    ))}
                </ul>
            ) : (
                <CategoryItem
                    key={props.items.id}
                    name={props.items.name}
                />
            )}
        </div>
    );
};
export default CategoryTable;