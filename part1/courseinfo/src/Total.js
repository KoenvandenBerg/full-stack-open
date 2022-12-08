const Total = (props) => {

    let sum = 0;

    for (let number of props.exerciseCount) {
        sum += number;
    }

    return  (
      <>
        <p>Number of exercises {sum}</p>
      </>
    )
}

export default Total;