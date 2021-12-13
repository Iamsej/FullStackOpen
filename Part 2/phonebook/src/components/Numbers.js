import React from 'react'

const Person = ({name, number}) => {
    return(
      <>
        <p>
          {name}: {number}
        </p>
      </>
    )
  }

const Numbers = (props) => {
    const searchFilter = (person) => {
        if (person.name.toLowerCase().indexOf(props.searchName.toLowerCase()) >-1) {
          return(
            person
          )
        }
      }

    const midmap = (props.persons.map(searchFilter)).filter(e => e !== undefined)
    const personsmap = midmap.map(person => 
    <Person key={person.name} name={person.name} number={person.number} />)
    
    return(
      <>
        {personsmap}
      </>
    )
  }

export default Numbers