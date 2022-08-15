import './App.css';
import CurrentWeather from './components/currentWeather/CurrentWeather';
import Search from './components/search/Search';

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
    
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}></Search>
      <CurrentWeather></CurrentWeather>
    </div>
  );
}

export default App;
