import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const App = ()=>{
const[good, setgood]= useState(0)
const[neutral, setneutral]= useState(0)
const[bad, setbad]= useState(0)

return(
  <div>
      <h1>give feedback</h1>
      <div>
          <button onClick = {()=>setgood(good +1)}>good</button>
          <button onClick = {()=>setneutral(neutral +1)}>neutral</button>
          <button onClick = {()=>setbad(bad +1)}>bad</button>
      </div>
        <div>
            <h1>statistic</h1>
            <p>good  {good}</p>
            <p>neutral {neutral}</p>
            <p> bad {bad}</p>
            

        </div>
        
  </div>



)

}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

