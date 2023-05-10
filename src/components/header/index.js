import React from "react";
import styles from './styles.module.css'
import { BackButton } from "../backButton";
import DarkModeToggle from "../darkModeToggle";


export default function Header({ onBack, darkMode, setDarkMode }) {
    const showBack = onBack ? true : false;
    return (
        <div className={styles.header}>
            <div className={styles.titleContainer}>
                {showBack && <BackButton onBack={onBack} />}
                <div className={styles.title}>Parenting Wellness Tips</div>
            </div>
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
    );
}