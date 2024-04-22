import React, { useRef } from 'react'

function InputWithFocus() {
  const inputRef = useRef(null);
  // The useRef hook is useful for accessing and interacting with DOM elements directly in functional components. 
  // It also allows us to persist values across renders without causing re-renders, similar to instance variables in class components.

  const focusInput = () => {
    inputRef.current.focus();
  }
  return (
    <div>
      <input ref={inputRef} type="text"/>
      <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default InputWithFocus
