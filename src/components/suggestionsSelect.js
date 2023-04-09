import React from 'react';
import styles from './suggestionsSelect.module.css';

const SuggestionsSelect = ({ suggestions, selectedSuggestions, onSelect }) => {
    const handleSelect = (suggestion) => {
        onSelect(suggestion);
    };

    return (
        <div className={styles.suggestionContainer}>
            {suggestions.map((suggestion) => (
                <div
                    key={suggestion}
                    className={`${styles.suggestion} ${selectedSuggestions.includes(suggestion) ? styles.selected : ''}`}
                    onClick={() => handleSelect(suggestion)}
                >
                    {suggestion}
                </div>
            ))}
        </div>
    );
}

export default SuggestionsSelect;