import logo from './logo.svg';
import './App.css';
import SuggestionsSelect from './components/suggestionsSelect';
import data from './data.json';
import { useState } from 'react';

function App() {
  const [selected, setSelected] = useState([]);
  const onSelect = (suggestion) => {
    if (selected.includes(suggestion)) {
      setSelected(selected.filter((s) => s !== suggestion));
    } else {
      setSelected([...selected, suggestion]);
    }
  };

  const suggestions = data['Proper Nutrition'].suggestions;

  return (
    <div className="App">
      <SuggestionsSelect
        suggestions={suggestions}
        selectedSuggestions={selected}
        onSelect={onSelect}
      />
    </div>
  );
}

export default App;
