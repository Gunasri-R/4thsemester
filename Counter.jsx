import React from 'react'
function Counter() {
  const [count, setCount] = useState(0)

  const incre = () =>{

  }
  

  const decre = () => {
  }
    

  const reset = () => {
    
  }

  return (
    <div>
      <h2>Counter App</h2>
      <p>{count}</p>

      <button onClick={incre}>Increment</button>
      <button onClick={decre}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter;


