import StatisticsLine from "./StatisticsLine"

const Statistics = ({ good, neutral, bad, total}) => {

    if (total === 0) {
        return (
          <>
            <h1>Statistics</h1>
            <p>No feedback given</p>
          </>
        )
    }

    return (
      <>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <StatisticsLine text={"good"} value={good} />
            <StatisticsLine text={"neutral"} value={neutral} />
            <StatisticsLine text={"bad"} value={bad} />
            <StatisticsLine text={"total"} value={total} />
            <StatisticsLine text={"average"} value={total === 0 ? "-" : (good * 1 + bad * -1) / total} />
            <StatisticsLine text={"positive"} value={total === 0 ? "-" : good / total * 100 + "%"} />
          </tbody>
        </table>
      </>
    )
}

export default Statistics