import React from 'react';
import SuggestionsSelect from '../components/suggestionSelect';
import styles from './suggestionSelectPage.module.css';

const SuggestionSelectPage = ({ onBack, title, description, suggestions, selectedSuggestions, onSelect }) => {
    return <>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
        <SuggestionsSelect
            category={title}
            suggestions={suggestions}
            selectedSuggestions={selectedSuggestions}
            onSelect={onSelect}
        />
    </>
};

export default SuggestionSelectPage;