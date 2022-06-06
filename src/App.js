import React,{useState} from "react";
import "./App.css"


function App(){
  const [count, setCount]= useState(0);
 //const [variableName, setVariableName]=useState(initialValueORdefaultValue) 

   return(
     <div className="App">
       <header>
      <h1>Counter app using state/hooks</h1>
      </header> 
      <h2>current value of count is {count}</h2>
      <button onClick={() => setCount(0)}>Resent counter</button>
      <button onClick={() => count>10? " ": setCount(count + 1)}>Increment</button>
      <button onClick={() => count<1? " ": setCount(count - 1)}>Decrement</button>
     </div>
   )
}
export default App;

