import React from "react";
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

export function BackButton({ onBack }) {
    return <div
        class={styles.backButton}
        onClick={() => onBack()}
    >
        <FontAwesomeIcon icon={faArrowLeftLong} /> Back
    </div>
}