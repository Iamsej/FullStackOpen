import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return(
        request.then(response => response.data)
    )
}

const sendName = newObject => {
    const request = axios.post(baseUrl, newObject)
    return(
        request.then(response => response.data)
    )
}

const deleteName = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return(
        request.then(alert('Entry deleted'))
    )
}

export default

{
    getAll,
    sendName,
    deleteName
}