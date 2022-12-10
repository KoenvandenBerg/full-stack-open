const Statistics = ({ good, neutral, bad, total}) => {

    return (
      <>
        <h1>Statistics</h1>
        <p>good: {good}</p>
        <p>neutral: {neutral}</p>
        <p>bad: {bad}</p>
        <p>total: {total}</p>
        <p>average: {total === 0 ? "-" : (good * 1 + bad * -1) / total}</p>
        <p>positive: {total === 0 ? "-" : good / total * 100 + "%"}</p>
      </>
    )
}

export default Statistics