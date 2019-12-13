import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points,setpoint] = useState(new Array(6).fill(0))
  
  

  const handleClick=()=>{
    setSelected(Math.floor(Math.random()*5) +1)

  }
  
  const handleVote = ()=>{
         const copy =  [...points]
         copy[selected] +=1
         setpoint(copy)
  }
  
const index = points.indexOf(Math.max(...points))

  return (
    <div>
     <h1>anecdote of the day</h1>
      {props.anecdotes[selected]}
     <p> has {points[selected]} votes</p>

     <div>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleClick}>next anecdotes</button>
      </div>
       <h1> anecdote with most votes</h1>
       {props.anecdotes[index]}
     <p> has {points[index]} votes</p>
      
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
