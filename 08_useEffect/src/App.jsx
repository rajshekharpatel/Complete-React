import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);

// First: component load/change hone par run hota hai.

// Second: component remove/change se pehle run hota hai.

// Third: dependencies decide karti hain effect kab chalega.


//variation 1: run on each render means jab bhi component load ya update hoga tab ye effect chalega.
  useEffect(() => {
    alert("This will run on each render")
  })

//variation 2: run only on first render means jab component load hoga tab ye effect chalega.
  useEffect(() => {
    alert("This will run only on first render")
  }, [])
  
//variation 3: run on first render and when count changes means jab component load hoga ya count change hoga tab ye effect chalega.
  useEffect(() => {
    alert("This will run on first render and when count changes")
  }, [count])


//variation 4: multiple dependencies means jab component load hoga ya count ya total change hoga tab ye effect chalega.
  useEffect(() => {
    alert("This will run on first render and when count or total changes")
  }, [count, total])  

//variation 5: cleanup function means jab component remove hoga ya update hoga tab ye function chalega.
  useEffect(() => {
    alert("Count is updated")
    return () => {
      alert("Count is unmounted or updated from UI");
    }
  }, [count])

//any type of side effect can be handled using useEffect like API call, event listener, timer etc.
//timer example:
  useEffect(() => {
    const timer = setTimeout(() => {
      alert("This will run after 3 seconds")
    }, 3000)

    return () => {
      clearTimeout(timer);
    }
  }, [total])


//time running example:
  useEffect(() => {
    const timer = setInterval(() => {
      setTotal(prevTotal => prevTotal + 1);
    }, 1000)

    return () => {
      clearInterval(timer);
    }
  }, [])

  function handleClick() {
    setCount(count+1);
  }

  function handleTotal() {
    setTotal(total+2);
  }

  return (

    <div>
      <button onClick={handleClick}>Click Me</button>
      <br />
      <p>Count: {count}</p>

      <button onClick={handleTotal}>Update Total</button>
      <br />
      <p>Total: {total}</p>
    </div>
  )
}

export default App
