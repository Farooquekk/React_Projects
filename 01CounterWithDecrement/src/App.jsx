import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    setCount(count - 1);
  }
  const reset = () => {
    setCount(0);
  }

  return (
    <>
      
      <h1 className='main-heading'>Counter Project</h1>
      <div className="card-container">
        <h2>Counter : { count} </h2>
        <div className='container'>
          <button onClick={increment} style={{ backgroundColor: 'green' } }>
          Increment
        </button>
          <button onClick={decrement} style={{ backgroundColor: 'red' } }>
         Decrement
          </button>
        <button onClick={reset} style={{ backgroundColor: 'Blue' } }>
         Reset
          </button>
          </div>
       </div>
        
    </>
  )
}

export default App
