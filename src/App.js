import './App.css';
import Header from './components/header';
import SuggestionsSelectPage from './pages/suggestionSelectPage';
import CategorySelect, { SHOW_ALL_CATEGORIES } from './components/categorySelect';
import ViewSelectionsPage from './pages/viewSelectionsPage';
import data from './data.json';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [selected, setSelected] = useState([]);
  const [selectedWithCategory, setSelectedWithCategory] = useState({});
  const [page, setPage] = useState('');
  const pages = Object.keys(data);
  console.log(selectedWithCategory);

  const onSelect = (category, suggestion) => {
    let newCategory = selectedWithCategory[category] || [];
    let newSuggestions = [...selected];
    if (selected.includes(suggestion)) {
      newSuggestions = newSuggestions.filter((s) => s !== suggestion);
      newCategory = newCategory.filter((s) => s !== suggestion);
    } else {
      newSuggestions.push(suggestion);
      newCategory.push(suggestion);
    }
    setSelected(newSuggestions);
    setSelectedWithCategory({
      ...selectedWithCategory,
      [category]: newCategory,
    });
  };

  const onBack = () => {
    setPage('');
  }

  const onPageSelect = (page) => {
    setPage(page);
  }

  const getCategoryColor = (category) => {
    const categoryData = data[category];
    return categoryData ? categoryData.color : null;
  };

  // back button will be hidden if the function is null
  const back = page.length ? onBack : null;

  const suggestions = data[page] ? data[page].suggestions : [];
  const showAllSelections = page === SHOW_ALL_CATEGORIES;
  const showCategory = page.length > 0 && !showAllSelections;

  return (
    <div className="App" data-theme={darkMode ? 'dark' : 'light'}>
      <Header onBack={back} darkMode={darkMode} setDarkMode={setDarkMode} />
      {showCategory &&
        <SuggestionsSelectPage
          onBack={onBack}
          title={page}
          suggestions={suggestions}
          selectedSuggestions={selected}
          onSelect={onSelect}
          getCategoryColor={getCategoryColor}
        />
      }
      {page.length === 0 &&
        <CategorySelect
          categories={pages}
          onSelect={onPageSelect}
          getCategoryColor={getCategoryColor}
        />
      }
      {showAllSelections &&
        <ViewSelectionsPage selections={selected} onBack={onBack} getCategoryColor={getCategoryColor} />
      }

    </div>
  );
}

export default App;
