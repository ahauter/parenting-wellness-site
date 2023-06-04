import './App.css';
import Header from './components/header';
import SuggestionsSelectPage from './pages/suggestionSelectPage';
import CategorySelect, { SHOW_ALL_CATEGORIES } from './components/categorySelect';
import ViewSelectionsPage from './pages/viewSelectionsPage';
import data from './data.json';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selected, setSelected] = useState([]);
  const [selectedWithCategory, setSelectedWithCategory] = useState({});
  const [page, setPage] = useState('');
  console.log(selectedWithCategory);

  const onSelect = (category, suggestion) => {
    console.log(category, suggestion);
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
    console.log("PAGE", page);
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
      <Header
        onBack={back}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onSelect={onPageSelect}
        categories={data}
      />
      {!showCategory && !showAllSelections &&
        <div className="welcome">
          Select an area of difficulty on the wellness wheel to see suggestions of incremental changes that may help improve your mental wellness:
          <br />
          <br />
        </div>
      }
      <CategorySelect
        categoryData={data}
        onSelect={onPageSelect}
        getCategoryColor={getCategoryColor}
        size={page.length ? 200 : 400}
      />
      {showCategory &&
        <SuggestionsSelectPage
          onBack={onBack}
          title={page}
          suggestions={suggestions}
          description={data[page].description}
          selectedSuggestions={selected}
          onSelect={onSelect}
          getCategoryColor={getCategoryColor}
        />
      }
      {showAllSelections &&
        <ViewSelectionsPage
          selections={selectedWithCategory}
          categoryData={data}
          onBack={onBack}
        />
      }

    </div>
  );
}

export default App;
