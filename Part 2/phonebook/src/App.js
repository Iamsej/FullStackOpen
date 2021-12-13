import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Numbers from './components/Numbers'
import SubmissionForm from './components/SubmissionForm'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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

  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={searchName} function={searchBar}/>
      <h2>Add a new contact</h2>
      <SubmissionForm 
      namefield={newName} nameinput={handleNameInput}
      numberfield={newNumber} numberinput={handleNumberInput}
      submission={addName}
      />
      <h2>Numbers</h2>
      <Numbers persons={persons} searchName={searchName}/>
    </div>
  )
}

export default App