import React from 'react';
import styles from './styles.module.css'

export const SHOW_ALL_CATEGORIES = 'all';

export default function CategorySelect({ categories, onSelect, size, getCategoryColor }) {
    const handleSelect = (category) => {
        onSelect(category);
    };
    size = size || 400;
    // TODO resize text based on size
    const fontSize = size / 20;
    const numCategories = categories.length;
    // we want to make a selection wheel
    const rotation = 360 / numCategories;
    const r = size / 2;
    const vertexOffet = Math.round(r * Math.tan(Math.PI / numCategories));
    const arcPolygon = `polygon(${r - vertexOffet}px 0, ${r + vertexOffet}px 0, 50% 50% )`;

    const hoverEventFactory = (elemId) => {
        return (isMouseOver) => {
            const categoryElement = document.getElementById(elemId);
            categoryElement.style.display = isMouseOver ? 'block' : 'none';
        };
    };

    //TODO make category text and icon appear in correct place
    return (
        <div className={styles.categoryContainer}>
            <div className={styles.categoryTitle}>Select a Category</div>
            {categories.map((category, i) => {
                const elemId = `text-display-${category}`;
                return <>
                    <div
                        key={category}
                        className={styles.category}
                        onClick={() => handleSelect(category)}
                        onMouseOver={() => hoverEventFactory(elemId)(true)}
                        onMouseOut={() => hoverEventFactory(elemId)(false)}
                        style={{
                            height: size,
                            width: size,
                            backgroundColor: `${getCategoryColor(category)}`,
                            clipPath: arcPolygon,
                            transform: `rotate(${i * rotation}deg)`,
                        }}
                    />
                    <div>
                        <span
                            id={elemId}
                            style={{
                                transform: `rotate(${-i * rotation}deg)`,
                                display: 'none',
                                fontSize: fontSize,
                            }}>
                            {category}
                        </span>
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