import React, { useState } from 'react'

const Button = ( {name, func}) => {
  return(
    <>
      <button onClick={func}>{name}</button>
    </>
  )
}

const StatisticLine = ({name, value}) => 
  <tr>
    <td>{name}:</td>
    <td>{value}</td>
  </tr>

const Statistics = ( {good, bad, neutral} ) => {
  const total = (good + bad + neutral)
  const average = ((good - bad)/(total))
  const positivity = String((good/total)*100) + '%'
  if (total > 0){
    return (
      <>
        <h1>Feedback Statistics:</h1>
        <br/>
        <table>
          <tbody>
            <StatisticLine name='Good' value={good} />
            <StatisticLine name='Neutral' value={neutral} />
            <StatisticLine name='Bad' value={bad} />
            <StatisticLine name='Total' value={total} />
            <StatisticLine name='Average' value={average} />
            <StatisticLine name='Positive' value={positivity} />
          </tbody>
        </table>
      </>
    )
  } else {
    return (
      <>
        <h1>Feedback Statistics:</h1>
        <br/>
        <p>No feedback given</p>
      </>
    )
  }
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
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App