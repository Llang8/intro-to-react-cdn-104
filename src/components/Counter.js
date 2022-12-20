import { useState, useEffect } from 'react'

export default function Counter(props) {
    const [count, setCount] = useState(props.default || 0)
  
    function increment(incrementor) {
      setCount(count + incrementor)
      // count++
    }
  
    return (
      <div className="counter">
        <h2>{ props.title || "DEFAULT COUNTER" }</h2>
        Count: { count }
        <button onClick={ () => increment(1) }>Increment</button>
        <button onClick={ () => increment(2) }>Increment By 2</button>
        {
          (count > 0) ?
          // Output if condition is met (if)
          <button onClick={ () => increment(-1) }>Decrement</button> :
          // Output if condition is not met (else)
          <></>
        }
        {
          (count > 1) ?
          <button onClick={ () => increment(-2) }>Decrement By 2</button> :
          <></>
        }
      </div>
    );
}