const Content = (props) => {

    return (
      <>
        <p>
            {props.partDescriptions[0]} {props.exerciseCount[0]}
        </p>
        <p>
            {props.partDescriptions[1]} {props.exerciseCount[1]}
        </p>
        <p>
            {props.partDescriptions[2]} {props.exerciseCount[2]}
        </p>
      </>
    )
}

export default Content;