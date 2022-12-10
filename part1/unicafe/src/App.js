import { useState } from 'react'
import Button from './Button'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleClick = (currentState, setStateFunction) => {
    return () => {
      setStateFunction(currentState + 1)
      setTotal(total + 1)
    }
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleClick(good, setGood)} text={"good"} />
      <Button onClick={handleClick(neutral, setNeutral)} text={"neutral"} />
      <Button onClick={handleClick(bad, setBad)} text={"bad"} />
      <h1>Statistics</h1>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>total: {total}</p>
      <p>average: {total === 0 ? "-" : (good * 1 + bad * -1) / total}</p>
      <p>positive: {total === 0 ? "-" : good / total * 100 + "%"}</p>
    </div>
  )
}

export default App