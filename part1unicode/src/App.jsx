import { useState } from 'react'

const Statistics = ({ good, bad, neutral }) => {
  if (good + bad + neutral === 0) {
    return (
      <>
        <h2>No feedback given</h2>
      </>
    )
  }
  return (
    <>
      <table>
        <tr>
          <td>good</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>{good + bad + neutral}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{(good - bad) / (good + bad + neutral)}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{good / (good + bad + neutral) * 100}%</td>
        </tr>
      </table>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const handleGood = () => {
    setGood(good + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  return (
    <div>
      <h2>Give Feedback</h2>
      <button onClick={handleGood}>good</button>
      <button onClick={handleBad}>bad</button>
      <button onClick={handleNeutral}>neutral</button>
      <h2> Statics</h2>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App