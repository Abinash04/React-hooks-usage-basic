import React, {useReducer } from 'react'

function reducer(state, action){
    switch(action.type){
        case 'INCREMENT':
            return {count: state.count + 1}
        case 'DECREMENT':
            return {count: state.count - 1}
        default:
            throw new Error();
    }

}
function Count() {
    const [state, dispatch] = useReducer(reducer,{ count: 0 })
  return (
    <div>
    Count: {state.count}
      <button onClick={() => dispatch({type: 'DECREMENT'})}>-</button>  
      <button onClick={() => dispatch({type: 'INCREMENT'})}>+</button> 
    </div>
  )
}

export default Count;

{/*
useState and useReducer are both hooks provided by React for managing state in functional components. Here's a guideline on when to use each:

useState:
Use useState for managing simple state that can be represented by a single value or object.
It's suitable for managing independent state variables or state that doesn't require complex logic to update.
useState is straightforward and easy to use for managing local component state.

useReducer:
Use useReducer for managing more complex state logic or state that involves multiple values or complex updates.
It's suitable for managing state that requires conditional updates, derived state, or complex state transitions.
useReducer is especially useful when the next state depends on the previous state or when state updates involve multiple actions.
It's a good choice for managing global application state or state that needs to be shared among multiple components.
Here are some scenarios where useReducer might be more appropriate than useState:

Managing state with complex logic: If updating the state involves complex logic, conditional updates, or multiple actions, 
useReducer can make the code more organized and easier to reason about by centralizing the state logic in a reducer function.
Derived state: If you need to derive new state values based on the current state, useReducer can handle this more effectively than 
useState by allowing you to calculate the next state based on the previous state.
Sharing state logic: If you have multiple components that need to share the same state logic or state transitions, useReducer can be a 
better choice as it allows you to encapsulate the state logic in a reducer function that can be reused across components.
In general, start with useState for managing simple local state, and consider switching to useReducer if your state management needs 
become more complex or if you find yourself repeating similar state logic in multiple places.

*/}





