import React, { useState } from 'react'

const Person = ({name}) => {
  return(
    <>
      <p>
        {name}
      </p>
    </>
  )
}


const Numbers = ({persons}) => {
  console.log(persons)
  const personsmap = persons.map(person => 
  <Person key={person.name} name={person.name} />)
  return(
    <>
      {personsmap}
    </>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleInput = (event) => {
    setNewName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const address = {
      name: newName
    }
  
    persons.every(personEqualityChecker)
    ? setPersons(persons.concat(address))
    : alert(`${newName} is already in the Phonebook`)

    
    setNewName('')
  }

  const personEqualityChecker = (person) => 
    person.name !== newName
  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleInput}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Numbers persons={persons}/>
    </div>
  )
}

export default App