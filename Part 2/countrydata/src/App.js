import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import CountryDisplay from './components/CountryDisplay'


function App() {
  const [countries, setCountries] = useState([])
  const [searchTerm, setSearch] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
    }, []
  )
  
  const onSearch = (event) => {
    setSearch(event.target.value)
  }

  const showCountry = (event) => {
    setSearch(event.target.value)
  }

    return (
    <div>
      <Filter value={searchTerm} function={onSearch}/>
      <CountryDisplay countries={countries} searchTerm={searchTerm} showCountry={showCountry}/>
    </div>
  );
}

export default App;
