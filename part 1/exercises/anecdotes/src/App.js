import React, { useState } from 'react'



const Button = ( {func, text} ) => {
return(
    <>
      <button onClick={func}>{text}</button>
    </>
  )
}

const Highest = (props) => {
  return(
    <>
      <h1>Most voted anecdote:</h1>
      <p> "{props.winner}"</p>
      <p>currently has the most votes, with {props.votes}</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)

  const [points, setPoints] = useState(new Uint8Array(7))

  function getRandNumInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  function getRandAnecdote() {
    return (
      setSelected(getRandNumInt(0,6))
    )
  }

  function voteForAnecdote() {
    const copy = [...points]
    
    return (
      copy[selected] += 1,
      setPoints(copy)
    )
  }

  function findWinner() {
    const max = Math.max(...points)
    const index = points.indexOf(max)
    console.log(max)
    
    return(
      [anecdotes[index], max]
    )
  }

  return (
    <div>
      <h1>Your Anecdote:</h1>
      "{anecdotes[selected]}"
      <p>This anecdote has {points[selected]} votes</p>
      <p>
        <Button func={voteForAnecdote}
        text='Vote!' />
        <Button func={getRandAnecdote}
        text='Anecdote me!' />
      </p>
      <Highest winner={findWinner()[0]} votes={findWinner()[1]} />
    </div>
  )
}

export default App