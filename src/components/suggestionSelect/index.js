import React from 'react';
import styles from './styles.module.css';

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
                    <input type="checkbox"
                        className={styles.suggestionCheckbox}
                        checked={selectedSuggestions.includes(suggestion)}
                        readOnly
                    />
                    <span className={styles.checkMark}></span>
                    {suggestion}
                </div>
            ))}
        </div>
    );
}

export default SuggestionsSelect;