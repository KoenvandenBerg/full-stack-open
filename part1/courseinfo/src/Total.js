const Total = (props) => {

    let sum = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises

    return  (
      <>
        <p>Number of exercises {sum}</p>
      </>
    )
}

export default Total;