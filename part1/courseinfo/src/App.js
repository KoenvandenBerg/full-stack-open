import Header from './Header'
import Content from './Content'
import Total from './Total'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header text={course} />
      <Content name={part1} exercises={exercises1} />
      <Content name={part1} exercises={exercises2} />
      <Content name={part1} exercises={exercises3} />
      <Total exerciseCount={[exercises1, exercises2, exercises3]}/>
    </div>
  )
}

export default App