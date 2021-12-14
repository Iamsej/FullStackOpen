import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Filter from './components/Filter'

const Languages = (props) => {

  return(
    <>
      <ul>
        {props.languages}
      </ul>
    </>
  )
}

const CountryDisplay = (props) => {
  const searchFilter = (country) => {
    if (country.name.common.toLowerCase().indexOf(props.searchTerm.toLowerCase()) >-1) {
      return(
        country
        )
    }
  }

  const midMap = (props.countries.map(searchFilter)).filter((e) => e !== undefined)
  const toDisplay = midMap.map(
    (country) => <li key={country.cca2}>{country.name.common}</li>
  )
  console.log(midMap)


  return(
    <>
      <div>
        <p>Name:</p>
        <p>Capital:</p>
        <ul>
          <li>Languages</li>
          <li>list</li>
        </ul>
        <p>Flag:</p>
        <p>{toDisplay}</p>
      </div>
    </>
  )
} 




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

    return (
    <div>
      <Filter value={searchTerm} function={onSearch}/>
      <CountryDisplay countries={countries} searchTerm={searchTerm}/>
    </div>
  );
}

export default App;
