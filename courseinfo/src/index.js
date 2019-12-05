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
  const course = 'Half Stack application development'
  const parts =[ {
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
    const Content = ()=>{
    

      return (
           <div>
          <Part part = {parts[0].name} exercise={parts[0].exercises}/>
          <Part part = {parts[1].name} exercise={parts[1].exercises}/>
          <Part part = {parts[2].name} exercise={parts[2].exercises}/>
           </div>
      )
  
  }
    
    return (
      <div>
        <Header course={course}/>
        <Content/>
        <Total total = {parts[0].exercises + parts[1].exercises+ parts[2].exercises}/>
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'));


