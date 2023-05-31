import React from "react";
import styles from './styles.module.css'
import { BackButton } from "../backButton";
import DarkModeToggle from "../darkModeToggle";
import CategorySelect from "../categorySelect";


export default function Header({ onBack, darkMode, setDarkMode, categories, onSelect }) {
    const showBack = onBack ? true : false;
    return (
        <>
            <div className={styles.header}>
                <div className={styles.titleContainer}>
                    {showBack && <BackButton onBack={onBack} />}
                    <div className={styles.title}>Parenting Wellness Tips</div>
                </div>
                <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

            </div>
            <div className={styles.categorySelect}>
                {showBack && <CategorySelect
                    categoryData={categories}
                    onSelect={onSelect}
                    size={200}
                />}
            </div >
        </>
    );
}