import React, { useMemo, useState } from 'react'

function ExpensiveCompute() {
    const [count, setCount] = useState(0);
    const [inputNumber, setInputNumber] = useState(0);

    const expensiveComputation = useMemo(()=> {
        return inputNumber ** 2;
    }, [inputNumber])

  return (
    <div>
      {/* add an input element which takes a number */} 
      <h3>Enter a number:</h3><input type="number" value={inputNumber} onChange={(e)=>setInputNumber(parseInt(e.target.value))}/>
      <button onClick={()=>{setCount(count+1)}}>Increment Count</button>
      <p>Result of expensive computation:{expensiveComputation}</p>
    </div>
  )
}

export default ExpensiveCompute

{/*
useMemo is a React hook used for memoizing the result of a function or computation. It is primarily used to optimize 
performance by caching the result of expensive calculations so that they are only recomputed when necessary. Here's when
 and why you should use useMemo:

Optimizing expensive computations:
Use useMemo when you have a computationally expensive function or calculation that is called frequently, but its result doesn't change often.
By wrapping the function or calculation with useMemo, React will only recompute the result when one of the dependencies changes,
 preventing unnecessary recalculations.
Preventing unnecessary re-renders:
Use useMemo to prevent unnecessary re-renders caused by expensive computations in functional components.
By memoizing the result with useMemo, you ensure that the calculation is only performed once and the cached result is reused across 
renders as long as the dependencies remain the same.
Optimizing component performance:
Use useMemo to optimize the performance of components that render frequently or have expensive rendering logic.
Memoizing expensive computations with useMemo can lead to improved rendering performance and reduced CPU usage, especially in components 
with complex rendering logic.
Memoizing derived data:
Use useMemo to memoize derived data or computed properties that are based on other state or props.
By memoizing derived data with useMemo, you ensure that the computation is only performed when the underlying data changes, reducing 
unnecessary recalculations.
Avoiding unnecessary re-renders in child components:
Use useMemo to memoize props passed to child components that are expensive to compute.
Memoizing props with useMemo prevents unnecessary re-renders of child components when the props haven't changed, improving overall 
application performance.
In summary, use useMemo to optimize performance by memoizing expensive computations, preventing unnecessary re-renders, and improving 
the overall responsiveness of React applications. It's a powerful tool for optimizing performance-critical parts of your application.

*/}