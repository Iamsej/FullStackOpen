import React from "react";

const Header = ({course}) => {
  return (
    <>
      <h1>{course}</h1>
    </>
  );
};

const Part = (props) => {
  return (
    <>
      <p>
        {props.name} {props.count}
      </p>
    </>
  );
};

const Content = ({parts}) => {
  const partsmap = parts.map(part => 
  <Part key={part.id} name={part.name} count={part.exercises} />)
  
  return (
    <>
      {partsmap}
    </>
  );
};

/**const Total = ({parts}) => {
  return (
    <>
      <p>
        Number of exercises{' '}  
        {
        parts[0].exercises +
        parts[1].exercises +
        parts[2].exercises
        }
      </p>
    </>
  );
}; **/

const Course = ({course}) => {
  
  

  return(
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
    ]
  }

  return (
    <Course course={course} />
  );
};

export default App;
