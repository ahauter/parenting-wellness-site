import React from 'react';
import styles from './styles.module.css'
import { text } from '@fortawesome/fontawesome-svg-core';

export const SHOW_ALL_CATEGORIES = 'all';

export default function CategorySelect({ categoryData, onSelect, size }) {
    const handleSelect = (category) => {
        onSelect(category);
    };
    const categories = Object.keys(categoryData);
    size = size || 400;
    // TODO resize text based on size
    const fontSize = size / 20;
    const numCategories = categories.length;
    // we want to make a selection wheel
    const rotation = 360 / numCategories;
    const r = size / 2;
    const vertexOffet = Math.round(r * Math.tan(Math.PI / numCategories));
    const arcPolygon = `polygon(${r - vertexOffet}px 0, ${r + vertexOffet}px 0, 50% 50% )`;

    //TODO make category text and icon appear in correct place
    return (
        <div className={styles.categoryContainer}>
            <div className={styles.categoryTitle}>Select a Category</div>
            {categories.map((categoryName, i) => {
                const category = categoryData[categoryName];
                const elemId = `text-display-${categoryName}`;
                const textRotation = -1 * (i * rotation);
                return <>
                    <div
                        key={category}
                        className={styles.category}
                        onClick={() => handleSelect(categoryName)}
                        style={{
                            height: size,
                            width: size,
                            backgroundColor: `${category.color}`,
                            clipPath: arcPolygon,
                            transform: `rotate(${i * rotation}deg)`,
                        }}
                    >
                        <div
                            className={styles.categoryTextContainer}
                            style={{
                                top: `${size / 8}px`,
                            }}>
                            <span
                                id={elemId}
                                style={{
                                    transform: `rotate(${textRotation}deg)`,
                                    fontSize: fontSize,
                                }}>
                                {category.title}
                            </span>
                        </div>
                    </div>
                </>
            })
            }
            <div className={styles.center}
                style={{
                    height: size / 4,
                    width: size / 4,
                }}
                onClick={() => handleSelect(SHOW_ALL_CATEGORIES)}
            >
                <div
                    className={styles.centerInner}
                    style={{ fontSize: fontSize }}>
                    See all your selections
                </div>
            </div>
        </div >
    );
};