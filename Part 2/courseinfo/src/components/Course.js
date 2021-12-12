import React from 'react';

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
          Total exercises in this course:{' '}  
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

export default Course