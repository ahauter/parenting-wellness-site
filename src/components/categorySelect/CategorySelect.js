import React, { useEffect } from 'react';
import styles from './styles.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from '../../icons';

export const SHOW_ALL_CATEGORIES = 'all';

export default function CategorySelect({ categoryData, selectedCategory, onSelect, size }) {
  const handleSelect = (category) => {
    onSelect(category);
  };
  let categories = Object.keys(categoryData);
  const categoryOffset = Math.max(0, categories.indexOf(selectedCategory))
  size = size || 400;
  // TODO resize text based on size
  const fontSize = size / 20;
  const numCategories = categories.length;
  // we want to make a selection wheel
  const rotation = 360 / numCategories;
  const r = size / 2;
  const vertexOffet = Math.round(r * Math.tan(Math.PI / numCategories));
  const arcPolygon = `polygon(${r - vertexOffet}px 0, ${r + vertexOffet}px 0, 50% 50% )`;

  const centerRef = React.useRef(null);
  const [mouseX, setMouseX] = React.useState(0);
  const [mouseY, setMouseY] = React.useState(0);
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  // generate a css gradient based on mouse position for center of the wheel
  useEffect(() => {
    const centerElem = centerRef.current;
    const rect = centerElem.getBoundingClientRect();
    const centerX = rect.left + (rect.width / 2);
    const centerY = rect.top + (rect.height / 2);
    const mouseDistance = Math.sqrt(Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2));
    const x = mouseX - centerX;
    const y = mouseY - centerY;
    const angle = Math.atan2(y, x) * 180 / Math.PI;
    // adjust percent to make distance inside middle to be constant 
    const grandientStyle = `linear-gradient(${angle - 90}deg, var(--color-secondary) 0%, 1%, var(--background-color) 95%)`;
    if (mouseDistance > size / 8) {
      centerElem.style.backgroundImage = grandientStyle;
    } else {
      centerElem.style.backgroundImage = '';
    }
  }, [mouseX, mouseY, size]);

  return (
    <div className={styles.categoryContainer}
      style={{
        paddingTop: `${size / 2}px`,
        paddingBottom: `${size / 2}px`,
      }}
    >
      <div className={styles.categoryTitle}>Select a Category</div>
      {categories.map((categoryName, i) => {
        i = i - categoryOffset
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
                  transition: "0.5s"
                }}>
                {category.title}
                <br />
                <FontAwesomeIcon icon={icons(categoryName)} />
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
          padding: size / 30,
        }}
        ref={centerRef}
        onClick={() => handleSelect(SHOW_ALL_CATEGORIES)}
      >
        <div
          className={styles.centerInner}
          style={{
            fontSize: fontSize,
          }}>
          See all your selections
        </div>
      </div>
    </div >
  );
};
