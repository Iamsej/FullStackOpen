import React from 'react'

const Person = ({name, number, deletion}) => {
    return(
      <>
        <p>
          {name}: {number} <button value={name} onClick={deletion}>Delete</button>
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
    <Person key={person.name} name={person.name} number={person.number} deletion={props.deletion}/>)
    
    return(
      <>
        {personsmap}
      </>
    )
  }

export default Numbers