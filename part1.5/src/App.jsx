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
      <Header course={course} />
      <Content parts={[{ name: part1, exercises: exercises1 }, { name: part2, exercises: exercises2 }, { name: part3, exercises: exercises3 }]} />
      <Total parts={[{ name: part1, exercises: exercises1 }, { name: part2, exercises: exercises2 }, { name: part3, exercises: exercises3 }]} />
    </div>
  )
}


const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  const contentElements = [];

  for (let i = 0; i < props.parts.length; i++) {
    contentElements.push(
      <p key={i}>{props.parts[i].name} {props.parts[i].exercises}</p>
    );
  }

  return (
    <>
      {contentElements}
    </>
  );
};

const Total = (props) => {
  let cnt = 0;
  for (let i = 0; i < props.parts.length; i++) {
    cnt += props.parts[i].exercises
  }
  return (
    <p>Number of exercises {cnt}</p>
  )
}

export default App