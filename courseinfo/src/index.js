import React from 'react';
import ReactDOM from 'react-dom';

const Header =(props)=>{

    return(
        <div>
             <h1>{props.course}</h1>
        </div>
    )

}
const Part = (props)=>{

return(
    <div>
    <p>{props.part},  Exercise = {props.exercise}</p>
 </div>

)

}

const Total = (props)=>{

return(
      <div>
<p> Total number of exercises are  {props.total}</p>
      </div>

)

}
const App = () => {
  const course = {header :'Half Stack application development',
   parts :[ {
    name: 'Fundamentals of React',
    exercises: 10
  },
   {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
  ]
}
    const Content = ()=>{
    

      return (
           <div>
          <Part part = {course.parts[0].name} exercise={course.parts[0].exercises}/>
          <Part part = {course.parts[1].name} exercise={course.parts[1].exercises}/>
          <Part part = {course.parts[2].name} exercise={course.parts[2].exercises}/>
           </div>
      )
  
  }
    
    return (
      <div>
        <Header course = {course.header} />
        <Content/>
        <Total total = { course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'));


