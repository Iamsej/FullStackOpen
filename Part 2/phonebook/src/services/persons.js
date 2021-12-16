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

const updateName = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const deleteName = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return(
        request.then(console.log('Entry deleted'))
    )
}

export default

{
    getAll,
    sendName,
    deleteName,
    updateName
}