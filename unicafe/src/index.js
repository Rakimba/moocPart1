import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Button =(props)=>(
<button onClick={props.handleClick}> {props.text} </button>

)

const Statistics =(props)=>{
  
    if(props.total ===0){
      return (
          <div>
           <p>No feedback given</p>
          </div>
      )

    }
  

    return(

       <div>
<p> {props.text} {props.value} {props.percent}</p>
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
          <Button handleClick = {handleGood} text= "good"/>
          <Button handleClick = {handleNeutral} text ="neutral" />
          <Button handleClick = {handleBad} text = "bad" />
        </div>
        <h1>statistics</h1>
 <table>
     <tbody>
    <tr>
        <td><Statistics text= "good"/> </td>
        <td><Statistics value= {good}/> </td>
    </tr>
    <tr>
        <td><Statistics text= "neutral"/>  </td>
        <td><Statistics value= {neutral}/> </td>
    </tr>
    <tr>
        <td><Statistics text= "bad"/></td>
        <td><Statistics value= {bad} /></td>
    </tr>
    <tr>
        <td><Statistics text= "Average" /></td>
        <td><Statistics value ={add/total} total ={total} /></td>
    </tr>
    <tr>
        <td><Statistics text= "Positive" /></td>
        <td><Statistics value ={good/total}  total ={total} percent ="%"/></td>
    </tr>
    </tbody>
</table>

</div>
)

}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

