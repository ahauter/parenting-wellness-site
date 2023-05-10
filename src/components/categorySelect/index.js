import React from 'react';
import styles from './styles.module.css'

export const SHOW_ALL_CATEGORIES = 'all';

export default function CategorySelect({ categories, onSelect, size }) {
    const handleSelect = (category) => {
        onSelect(category);
    };
    size = size || 400;
    const numCategories = categories.length;
    // we want to make a selection wheel
    const rotation = 360 / numCategories;
    const r = size / 2;
    const vertexOffet = Math.round(r * Math.tan(Math.PI / numCategories));
    const arcPolygon = `polygon(${r - vertexOffet}px 0, ${r + vertexOffet}px 0, 50% 50% )`;


    return (
        <div className={`${styles.categoryContainer}`}>
            <div className={styles.categoryTitle}>Select a Category</div>
            {categories.map((category, i) => {
                console.log(category.color)
                return <div
                    key={category}
                    className={styles.category}
                    onClick={() => handleSelect(category)}
                    style={{
                        height: size,
                        width: size,
                        transform: `rotate(${i * rotation}deg)`,
                        backgroundColor: `hsl(${Math.random() * 360}, 100%, 80%)`,
                        clipPath: arcPolygon
                    }}
                >
                    <div style={{ transform: `rotate(${-i * rotation}deg)` }}>
                        {category}
                    </div>
                </div>
            })
            }
            <div className={styles.center}
                style={{
                    height: size / 2,
                    width: size / 2,
                }}
                onClick={() => handleSelect(SHOW_ALL_CATEGORIES)}
            >
                <div className={styles.centerInner}>
                    See all your selections
                </div>
            </div>
        </div >
    );
};