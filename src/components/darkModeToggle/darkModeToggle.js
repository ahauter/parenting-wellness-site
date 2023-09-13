import React from 'react';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

export default function DarkModeToggle({ darkMode, setDarkMode }) {
    const handleToggle = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div>
            <div className={styles.toggle_text}>Dark Mode</div>
            <div className={styles.toggle} onClick={handleToggle}>
                <div className={styles.toggle_track}>
                    <div
                        className={
                            `${styles.toggle_thumb} ${darkMode ? styles.toggle_thumb_right : ""}`}>
                        <FontAwesomeIcon
                            className={styles.toggle_icon}
                            icon={darkMode ? faMoon : faSun}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
} 