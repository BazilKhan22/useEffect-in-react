import React, { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0)
  
    


 useEffect(() => {
    if (count>0) {
      alert(`Count has been updated to ${count}`)
      
    }
  }, [count])

  return (
    <div>
      <h1> Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>helllo</h1>
    </div>
  )
}

export default App
