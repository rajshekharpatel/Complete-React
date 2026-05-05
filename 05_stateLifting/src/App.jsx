import Card from './components/Card'
import { useState } from  'react';


function App() {

  const [name, setName] = useState('');
  

  return (
    <div>
      <Card title="Card 1" name={name} setName={setName}/>
      <Card title="Card 2" name={name} setName={setName}/>
      <p>My Name is {name}</p>
    </div>
  )
}

export default App
