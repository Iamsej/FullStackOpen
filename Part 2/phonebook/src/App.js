import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Numbers from './components/Numbers'
import SubmissionForm from './components/SubmissionForm'
import serviceRequest from './services/persons'


const Notification = ({ message, error }) => {
  if (message === null && error === null) {
    return null
  } else if (message === null) {

    return (
      <div className='error'>
        {error}
      </div>
    )
  }

  return(
    <div className='message'>
      {message}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)

  const findIdForName= (targetName) => {
    const personObject = persons.find(person => person.name === targetName)
    return(personObject.id)
  }

  useEffect(() => {
    serviceRequest
      .getAll()
      .then(response => {
        setPersons(response)
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
    ? serviceRequest
        .sendName(address)
        .then(response => {setPersons(persons.concat(response))})
        .then(() => {setMessage(`${newName} sucessfully added`)})
        .then(()=> setTimeout(()=> {setMessage(null)}, 5000))
        .catch(error => {
          setError(error.response.data.error);
          setTimeout(() => {
            setError(null)
          }, 5000);
          setPersons(persons);
        })
    : window.confirm(
      `${newName} is already in the Phonebook. Would you like to update their number?`)
      ? serviceRequest
          .updateName(findIdForName(address.name), address)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.name !== returnedPerson.name ? person : returnedPerson))})
          .then(() => {setMessage(`${address.name} sucessfully updated`)})
          .then(()=> {setTimeout(()=> {setMessage(null)}, 5000)})
          .catch(error => {
            if (!error.response.data.error) {
              setError('Name already deleted from Phonebook')
              setPersons(persons.filter(person => person.name !== newName))
            } else {
              setError(error.response.data.error);
            }
            setTimeout(() => {
              setError(null)
            }, 5000); 
          })
      : alert('Cancelled update')
 
  setNewName('')
    setNewNumber('')
  }

  const removeName = (event) => {
    const deletionName = event.currentTarget.value
    const deletionCandidate = findIdForName(deletionName)
    window.confirm(`Are you sure you want to delete ${deletionName} from your contacts?`)
    ? serviceRequest
      .deleteName(deletionCandidate)
        .then( () => {setPersons(persons.filter(person => person.id !== deletionCandidate))})
        .then(() => {setMessage(`${deletionName} sucessfully deleted`)})
        .then(()=> setTimeout(()=> {setMessage(null)}, 5000))
        .catch(error => {
          setError('Person not found');
            setTimeout(() => {
              setError(null)
            }, 5000);
            setPersons(persons.filter(person => person.id !== deletionCandidate));
        })
    : alert('Deletion cancelled')
  }

  const searchBar = (event) => {
    setSearchName(event.target.value)
  }


  return (
    <div>
      <Notification message={message} error={error}/>
      <h2>Phonebook</h2>
      <Filter value={searchName} function={searchBar}/>
      <h2>Add a new contact</h2>
      <SubmissionForm 
      namefield={newName} nameinput={handleNameInput}
      numberfield={newNumber} numberinput={handleNumberInput}
      submission={addName}
      />
      <h2>Numbers</h2>
      <Numbers persons={persons} searchName={searchName} deletion={removeName}/>
    </div>
  )
}

export default App