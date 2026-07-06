import React, { useState } from 'react'

function Counter() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);

  }
  const decrement = () => {
    setCounter(counter - 1);
  }
  const reset = () => {
    setCounter(0);
  }
  return (
    <div className='counter'>
      <p className='countDisplay'>{counter}</p>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>
    </div>
  )
}
export default Counter;