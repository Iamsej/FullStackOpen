import React, {useState, useEffect} from 'react'
import Languages from './Languages'
import axios from 'axios'

  
const api_key = process.env.REACT_APP_API_KEY



const MidList = (props) => {
  const toDisplay = props.midMap.map(
    (country) => <li key={country.name.common}>{country.name.common}  <button value={country.name.common} onClick={props.showCountry}>Show</button></li>
  )
  
  return(
    <>
      <ul>
        {toDisplay}
      </ul>
    </>
  )
}
  
const WeatherDisplay = ({capital, weatherString}) =>{
    return(
       <> 
        <h3>Weather in {capital}</h3>
        <p>{weatherString[1]} {weatherString[2]}
          <br/>
          <img src={`http://openweathermap.org/img/wn/${weatherString[0]}@2x.png`} alt={''}></img>
        </p>
      </>
    )
}

const CountryItem = ({country}) => {
  const [weather, setWeather] = useState([])
  const [weatherString, setString] = useState(['01n', '81'])
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=Imperial&appid=${api_key}`)
      .then(response => {
        setWeather(response.data)
        setString(
          [response.data.weather[0].icon, 
          response.data.main.temp,
          response.data.weather[0].description])
      })
    }, [country.capital]
  )
  
  return(
    <>
    <h1>{country.name.common}</h1>
    <p>{country.capital}
      <br/>
      {country.population}
    </p>
    <h2>Languages:</h2>
    <ul>    
        <Languages country={country}/>
    </ul>
    <br/>
    <img src={country.flags.png} alt={`Flag of ${country.name.common}`}/>
    <WeatherDisplay weather={weather} capital={country.capital} weatherString={weatherString}/>
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
    
  const displayCutOff = () => {
    if (midMap.length > 10) {
      return(<p>Too many matches, please refine your search</p>)
    } else if (midMap.length === 1) {
      return(
          <CountryItem country={midMap[0]}/>
          )    
    } else if (1 < midMap.length < 10) {
      return(<MidList midMap={midMap} searchTerm={props.searchTerm} showCountry={props.showCountry}/>)
    } 
  }
  
  return(
    <>
      {displayCutOff()}
    </>
  )
} 

export default CountryDisplay