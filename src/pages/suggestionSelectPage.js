import React from 'react';
import SuggestionsSelect from '../components/suggestionSelect';
import styles from './suggestionSelectPage.module.css';

const SuggestionSelectPage = ({ title, description, suggestions, selectedSuggestions, onSelect }) => {
    return <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>Select which suggestions seem feasible for your lifestyle to generate a list of personalized wellness options:</div>
        <SuggestionsSelect
            category={title}
            suggestions={suggestions}
            selectedSuggestions={selectedSuggestions}
            onSelect={onSelect}
        />
    </div>
};

export default SuggestionSelectPage;