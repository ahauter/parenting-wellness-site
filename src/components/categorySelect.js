import React from 'react';
import styles from './categorySelect.module.css'
export default function CategorySelect({ categories, onSelect }) {
    const handleSelect = (category) => {
        onSelect(category);
    };

    return (
        <div className="category-container">
            {categories.map((category) => (
                <div
                    key={category}
                    className={styles.category}
                    onClick={() => handleSelect(category)}
                >
                    {category}
                </div>
            ))}
        </div>
    );
};