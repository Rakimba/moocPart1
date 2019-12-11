import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Average = (props)=>{
   const ave = props.add/props.total
   if(props.total ===0){
       return (
           <div>average 0</div>
       )
   }
  return(
      <div>
<p>average {ave}</p>
      </div>
  )
}

const Positive =(props)=>{
    const positive = props.good/props.total
    if(props.total ===0){
        return (
            <div>Positive 0 %</div>
        )
    }
   return(
       <div>
 <p>Positive {positive} %</p>
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

return(
  <div>
      <h1>give feedback</h1>
      <div>
          <button onClick = {handleGood}>good</button>
          <button onClick = {handleNeutral}>neutral</button>
          <button onClick = {handleBad}>bad</button>
        </div>
        <div>
            <h1>statistic</h1>

            <p>good  {good}</p>
            <p>neutral {neutral}</p>
            <p> bad {-bad}</p>
            <p>total {total}</p>
            <Positive good ={good} total = {total}/>
            <Average add={Math.abs(good+neutral-bad)} total = {total}/>

        </div>
        
  </div>



)

}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

