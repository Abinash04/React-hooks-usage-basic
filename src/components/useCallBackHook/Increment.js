import React, { useCallback, useState } from 'react'
const Button = ({onClick, children}) => {
    console.log("button component")
    return <button onClick={onClick}>{children}</button>
}

function Increment() {
    const [count, setCount] = useState(0);

    const increment = useCallback(()=> {
        setCount(count+1);
    },[count])

  return (
    <div>
        <h2>Count:{count}</h2>
      <Button onClick={increment}>Increment</Button>
    </div>
  )
}

export default Increment

{/*

The useCallback hook memoizes the callback function, so it only changes when its dependencies (in this case, count) change. 
This prevents unnecessary re-renders of the Button component.
We pass the memoized handleClick callback function as the onClick prop to the Button component.
With useCallback, the handleClick function is memoized and will only be recreated if the count state changes. 
This optimization helps to improve the performance of the application by avoiding unnecessary re-creation of callback functions on each render.
    
*/}

// WHEN to use useMemo and useCallback
{/*
useMemo and useCallback are both hooks provided by React for performance optimization, but they serve different purposes. Here's a comparison between them and when to use each:

useMemo:
useMemo is used to memoize the result of a computation and cache it.
It takes a function and an array of dependencies as arguments.
The function passed to useMemo is only re-executed if one of the dependencies in the array changes.
It returns the memoized value, which is recalculated only when necessary.
Use useMemo when you want to memoize and cache the result of an expensive computation, such as calculations, data transformations, 
or expensive function calls.
Example use cases: memoizing computed values, optimizing expensive calculations, avoiding unnecessary recalculations.

useCallback:
useCallback is used to memoize and cache callback functions.
It takes a callback function and an array of dependencies as arguments.
The callback function passed to useCallback is memoized, meaning it will only be recreated if one of the dependencies in the array changes.
It returns the memoized callback function, which remains the same between renders unless its dependencies change.
Use useCallback when you want to prevent unnecessary re-creation of callback functions, especially when passing callbacks as props to 
child components.
Example use cases: memoizing event handlers, preventing unnecessary re-renders of child components due to new callback references.
When to use them:

useMemo: Use when you need to memoize and cache the result of an expensive computation or data transformation, especially if the 
result is used as a value in the component's render function.
useCallback: Use when you need to memoize and cache callback functions, especially if they are passed as props to child components 
and you want to prevent unnecessary re-renders due to new callback references.
In summary, useMemo is used for memoizing values, while useCallback is used for memoizing callback functions. They help improve 
performance by optimizing expensive computations and preventing unnecessary re-creation of values or functions between renders.
*/}