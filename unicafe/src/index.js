import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Statistics =(props)=>{
  
    if(props.total ===0){
      return (
          <div>
              <h1>statistics</h1>
              <p>No feedback given</p>
          </div>
      )

    }
  

    return(

<div>
            <h1>statistic</h1>

            <p>good {props.good}</p>
            <p>neutral {props.neutral}</p>
            <p> bad {props.bad}</p>
            <p>total {props.total}</p>
             <p> Average {props.add/props.total}</p>
             <p>Positive {props.good/props.total} % </p>
            
        </div>

    )
}

const App = ()=>{
const[good, setgood]= useState(0)
const[neutral, setneutral]= useState(0)
const[bad, setbad]= useState(0)
const [total, settotal]= useState(0)


const handleGood =()=>{
    setgood(good +1)
    settotal(total + 1)

}
const handleNeutral =()=>{
    setneutral(neutral+1)
    settotal(total + 1)

}
const handleBad =()=>{
    setbad(good +1)
    settotal(total + 1)

}

const add = Math.abs(good+neutral-bad)


return(
  <div>
      <h1>give feedback</h1>
      <div>
          <button onClick = {handleGood}>good</button>
          <button onClick = {handleNeutral}>neutral</button>
          <button onClick = {handleBad}>bad</button>
        </div>
        <Statistics add ={add} good={good} neutral={neutral} bad ={bad} total={total} />
  </div>



)

}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

