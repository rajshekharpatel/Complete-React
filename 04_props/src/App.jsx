import { useState } from "react";
import Card from "./components/Card"
import Button from "./components/Button"


function App() {

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count+1);
  }

  return (

    <div>
      <Card name="Raj Shekhar" profession="Frontend Developer">
        <h1>Myself Raj Shekhar</h1>
        <p>I'm a Frontend Developer.</p>
        <p>I'm also a UI/UX Designer.</p>
        <p>I love to code!</p>
      </Card>

      {/*using children prop to pass content to the Card component.*/}
      <Card>
        I love to create Websites.
      </Card>

      {/*using children prop to pass content to the Card component with different method.*/}
      <Card children="Raj Shekhar | Frontend Developer"></Card>

      <Button handleClick={handleClick}>
        <h1>{count}</h1>
      </Button>
    </div>
  )
}

export default App
