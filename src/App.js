import React, {useState, useEffect } from 'react'
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  // useState: to handle reactive data,any data that changes in the app is called state, when state changes react update the UI , latest state
  //  is updated i.e. re-render.
  // 2 values are returned from useState, 1st is the state, 2nd is the setter function to update the state.
  // useState is a hook, it is a function that is called inside a functional component. 
  // useState?
 // useEffect : to handle side effects, side effects are things that happen in the background, like fetching data from an API, 
//  updating the DOM, and so on.
 // useEffect is a hook that is called inside a functional component.
 // useEffect is called after every render, it is called after the component is mounted and after every update. 

// useEffect?
// teardown phase: when a component is unmounted, 
useEffect(() => { document.title = `you clicked the page ${count} times`;}, [count])

// useContext : to share data between components, useContext is a hook that is used to share data between components without using props.
// useContext?

  return (
    <div className='App'>
      <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={()=>setCount(count+1)}>{count}</button>
      <button onClick={()=>{ if (count>0) {
        setCount(count-1)
        }}}>-</button>
    </div>
  )
}

