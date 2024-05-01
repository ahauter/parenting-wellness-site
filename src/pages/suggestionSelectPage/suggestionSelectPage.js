import React from 'react';
import SuggestionsSelect from '../../components/suggestionSelect';
import styles from './suggestionSelectPage.module.css';

const SuggestionSelectPage = ({ links, title, description, suggestions, selectedSuggestions, onSelect }) => {
  return <div className={styles.container}>
    <div className={styles.title}>{title}</div>
    <div className={styles.description}>{description}</div>
    <div className={styles.description}>Select the suggestions that seem feasible for your lifestyle to generate a list of personalized wellness options:</div>
    <SuggestionsSelect
      category={title}
      suggestions={suggestions}
      selectedSuggestions={selectedSuggestions}
      onSelect={onSelect}
      links={links}
    />
  </div>
};

export default SuggestionSelectPage;
