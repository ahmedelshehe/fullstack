import {useState} from 'react'
import countriesService from './services/countries';
import CountriesList from './components/CountriesList';
import CountryView from './components/CountryView';
function App() {
  const [countries,setCountries] =useState([]);
  const [searchTerm,setSearchTerm] = useState('');
  const handleSearchTermChange =(event)=>{
    setSearchTerm(event.target.value)
    countriesService.getAll().then((
      countries=>{setCountries(countries.filter(country =>country.name.common.toLowerCase().search(event.target.value.toLowerCase()) !== -1))}
    )).catch((error)=>{console.log(error);})
  };
  const handleShowCountry =(country)=>{
    setCountries([country])
  }
  const clearSearch=()=>{
    setSearchTerm('');
  }
  return (
    <div>
      <h1>Countries</h1>
      <label>Find Countries</label>
      <input type="text" onChange={handleSearchTermChange} value={searchTerm}/>
      <button onClick={clearSearch}>clear</button>
      <br/>
      {
        searchTerm === '' ?<p>Type to search for country</p> : countries.length >= 10 ? <p>Too many matches ,specify another filter</p> :
        countries.length ===1 ? <CountryView country={countries[0]} handleShowCountry={handleShowCountry}/> :
         <CountriesList countries={countries} handleShowCountry={handleShowCountry}/>
      }
      
    </div>
  );
}

export default App;
