import React from 'react';

const Language = ({language}) => {
    return(
      <>
        <li>{language}</li>
      </>
    )
  }
  
const Languages = ({country}) => {
    const languageList = Object.values(country.languages)
  
    return(languageList.map((language) => 
        <Language key={language} language={language}/>
    )
    )
  }

export default Languages