const Content = (props) => {
    console.log('props value: ', props)
    return (
      <>
        <p>
            {props.parts.parts[0].name} {props.parts.parts[0].exercises}
        </p>
        <p>
            {props.parts.parts[1].name} {props.parts.parts[1].exercises}
        </p>
        <p>
            {props.parts.parts[2].name} {props.parts.parts[2].exercises}
        </p>
      </>
    )
}

export default Content;