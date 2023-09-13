import React from 'react';
import styles from './styles.module.css';

const SuggestionsSelect = ({ category, suggestions, links, selectedSuggestions, onSelect }) => {
    return (
        <div className={styles.suggestionContainer}>
            {suggestions.map((suggestion) => (
                <div
                    key={suggestion}
                    className={`${styles.suggestion} ${selectedSuggestions.includes(suggestion) ? styles.selected : ''}`}
                    onClick={() => onSelect(category, suggestion)}
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
            {links && <div className={styles.linkContainer}>
                <div
                    className={styles.linkHeader}>Resources for <span>{category}</span>:</div>
                {links.map((link) => (
                    <div>
                        <a
                            className={styles.link}
                            href={`${link.url}`} > {link.title}
                        </a>
                    </div>
                ))}
            </div>}
        </div >
    );
}

export default SuggestionsSelect;