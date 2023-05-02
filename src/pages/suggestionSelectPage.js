import React from 'react';
import SuggestionsSelect from '../components/suggestionsSelect';
import styles from './suggestionSelectPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

const SuggestionSelectPage = ({ onBack, title, suggestions, selectedSuggestions, onSelect }) => {
    return <>
        <div
            class={styles.backButton}
            onClick={onBack}
        >
            <FontAwesomeIcon icon={faArrowLeftLong} /> Back
        </div>
        <div className={styles.title}>{title}</div>
        <SuggestionsSelect
            suggestions={suggestions}
            selectedSuggestions={selectedSuggestions}
            onSelect={onSelect}
        />
    </>
};

export default SuggestionSelectPage;