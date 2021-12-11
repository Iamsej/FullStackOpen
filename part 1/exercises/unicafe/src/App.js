import React, { useState } from 'react'

const Button = ( {name, func}) => {
  return(
    <>
      <button onClick={func}>{name}</button>
    </>
  )
}

const Stats = (props) => {
  return (
    <>
      <h1>Feedback Statistics:</h1>
      <br/>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
    </>
  )
}


const App = () => {
  // save clicks of each button to its own state   
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  return (
    <div>
      <h1>How was your experience with Unicafe?</h1>
      <Button name='good'
      func= {() => setGood(good + 1)} />
      <Button name='neutral'
      func= {() => setNeutral(neutral + 1)} />
      <Button name='bad'
      func= {() => setBad(bad + 1)} />
      <Stats good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App