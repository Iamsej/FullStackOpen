import React from 'react'
import Languages from './Languages'

  
  const MidList = (props) => {
    const toDisplay = props.midMap.map(
      (country) => <li key={country.name.common}>{country.name.common}</li>
    )
    
    return(
      <>
        <ul>
          {toDisplay}
        </ul>
      </>
    )
  }
  
  const CountryItem = ({country}) => {
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
        return(<MidList midMap={midMap}/>)
      } 
    }
  
    return(
      <>
        {displayCutOff()}
      </>
    )
  } 

export default CountryDisplay