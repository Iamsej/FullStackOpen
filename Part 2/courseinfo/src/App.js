import React from "react";

const Header = ({course}) => {
  return (
    <>
      <h2>{course}</h2>
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

const Total = ({parts}) => {
  const exercisecount = parts.map(part => part.exercises)
  

  return (
    <>
      <p>
        Total exercises in this course{' '}  
        {exercisecount.reduce((a, b) => a + b)}
      </p>
    </>
  );
};

const Course = ({course}) => {
  
  

  return(
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </div>
  )
}


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

const coursemap = courses.map(course => <Course key={course.id} course={course} />)

  return (
    <>
      <h1>Web Development Curriculum</h1>
      {coursemap}
    </>
  );
};

export default App;
