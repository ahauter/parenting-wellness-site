import './App.css';
import SuggestionsSelectPage from './pages/suggestionSelectPage';
import DarkModeToggle from './components/darkModeToggle';
import CategorySelect, { SHOW_ALL_CATEGORIES } from './components/categorySelect';
import ViewSelectionsPage from './pages/viewSelectionsPage';
import data from './data.json';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState('');
  const pages = Object.keys(data);

  const onSelect = (suggestion) => {
    if (selected.includes(suggestion)) {
      setSelected(selected.filter((s) => s !== suggestion));
    } else {
      setSelected([...selected, suggestion]);
    }
  };

  const onBack = () => {
    setPage('');
  }

  const onPageSelect = (page) => {
    setPage(page);
  }

  const suggestions = data[page] ? data[page].suggestions : [];
  const showAllSelections = page === SHOW_ALL_CATEGORIES;
  const showCategory = page.length > 0 && !showAllSelections;

  return (
    <div className="App" data-theme={darkMode ? 'dark' : 'light'}>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      {showCategory &&
        <SuggestionsSelectPage
          onBack={onBack}
          title={page}
          suggestions={suggestions}
          selectedSuggestions={selected}
          onSelect={onSelect}
        />
      }
      {page.length === 0 &&
        <CategorySelect
          categories={pages}
          onSelect={onPageSelect}
        />
      }
      {showAllSelections &&
        <ViewSelectionsPage selections={selected} onBack={onBack} />
      }

    </div>
  );
}

export default App;
