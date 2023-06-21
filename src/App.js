import './App.css';
import Header from './components/header';
import SuggestionsSelectPage from './pages/suggestionSelectPage';
import CategorySelect, { SHOW_ALL_CATEGORIES } from './components/categorySelect';
import ViewSelectionsPage from './pages/viewSelectionsPage';
import data from './data.json';
import { useState } from 'react';
import useWindowSize from './hooks/windowSize';
import paper from './Research Paper.pdf'

function App() {
  const screenWidth = useWindowSize();
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
        <>
          <div className="welcome">
            Select an area of difficulty on the wellness wheel to see suggestions of incremental changes that may help improve your mental wellness:
            <br />
            <br />
          </div>
        </>
      }
      <CategorySelect
        categoryData={data}
        onSelect={onPageSelect}
        getCategoryColor={getCategoryColor}
        size={Math.min(page.length ? 250 : 400, screenWidth - 40)}
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
          links={data[page].links}
        />
      }
      {showAllSelections &&
        <ViewSelectionsPage
          selections={selectedWithCategory}
          categoryData={data}
          onBack={onBack}
        />
      }
      {!showCategory && !showAllSelections &&
        <div className="mental-health-blurb">
          Parents of children with disabilities often
          <b>experience greater caregiving challenges</b> &
          <b>higher stress</b>
          than parents of typically developing children.
          <b>Positive mental health</b> in parents is associated with
          <b>improved development</b> & <b>wellbeing in children</b>.
          It is important to address <b>your mental health</b>
          for your own wellbeing and so you are better able to support your child.
          <b> Taking small steps can have large impacts.</b>
          <br />
        </div>}
      <div className="paperLinkHeader">
        For more information, please see the <br />
        <a href={paper}
          target="_blank"
          className="paperLink"
          rel="noreferrer"
        >
          Research Evidence Article
        </a>
        <br />
        <br />
        Please contact us if you have any questions or feedback at <br />
        <a href="mailto:wellnessforparents@gmail.com">
          wellnessforparents@gmail.com
        </a>
      </div>
    </div>

  );
}

export default App;
