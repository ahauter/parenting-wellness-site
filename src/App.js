import logo from './logo.svg';
import './App.css';
import SuggestionsSelect from './components/suggestionsSelect';
import DarkModeToggle from './components/darkModeToggle';
import data from './data.json';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(true);
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
    <div className="App" data-theme={darkMode ? 'dark' : 'light'}>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

    </div>
  );
}

export default App;
