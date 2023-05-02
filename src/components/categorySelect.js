import React from 'react';

export default function CategorySelect({ categories, onSelect }) {
    const handleSelect = (category) => {
        onSelect(category);
    };

    return (
        <div className="category-container">
            {categories.map((category) => (
                <div
                    key={category}
                    className="category"
                    onClick={() => handleSelect(category)}
                >
                    {category}
                </div>
            ))}
        </div>
    );
};