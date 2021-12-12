import React, { useState } from 'react'

const Person = ({name, number}) => {
  return(
    <>
      <p>
        {name}: {number}
      </p>
    </>
  )
}


const Numbers = ({persons}) => {
  const personsmap = persons.map(person => 
  <Person key={person.name} name={person.name} number={person.number} />)
  return(
    <>
      {personsmap}
    </>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')

  const handleNameInput = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberInput = (event) => {
    setNewNumber(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const address = {
      name: newName,
      number: newNumber
    }
  
    persons.every((person) => 
    person.name !== newName)
    ? setPersons(persons.concat(address))
    : alert(`${newName} is already in the Phonebook`)
 
    setNewName('')
    setNewNumber('')
  }

  const searchBar = (event) => {
    setSearchName(event.target.value)
  }

  const searchFilter = (person) => {
    if (person.name.toLowerCase().indexOf(searchName.toLowerCase()) >-1) {
      return(
        person
      )
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <p>Search for name: <input value={searchName} onChange={searchBar}/></p> 
      </div>
      <h2>Add a new contact</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameInput}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberInput}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Numbers persons={(persons.map(searchFilter)).filter(e => e !== undefined)}/>
    </div>
  )
}

export default App