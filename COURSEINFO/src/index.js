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
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    const Content = ()=>{
    

      return (
           <div>
          <Part part = {part1} exercise={exercises1}/>
          <Part part = {part2} exercise={exercises2}/>
          <Part part = {part3} exercise={exercises3}/>
           </div>
      )
  
  }
    
    return (
      <div>
        <Header course={course}/>
        <Content/>
        <Total total = {exercises1 +exercises2+ exercises3}/>
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'));


