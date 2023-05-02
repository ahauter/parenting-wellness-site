import React from 'react';
import SuggestionsSelect from '../components/suggestionsSelect';
import styles from './suggestionSelectPage.module.css';

const SuggestionSelectPage = ({ title, suggestions, selectedSuggestions, onSelect }) => {
    return <>
        <div className={styles.title}>{title}</div>
        <SuggestionsSelect
            suggestions={suggestions}
            selectedSuggestions={selectedSuggestions}
            onSelect={onSelect}
        />
    </>
};

export default SuggestionSelectPage;