import ChildA from "./components/ChildA"
import { createContext } from "react"
import { useState } from "react"


//1. create context: pahle step me context create karna hota hai
const UserContext = createContext();

//2. provide context: dusra step me context ko provide karna hota hai
//3. consume context: teesra step me context ko consume karna hota hai
//4. update context: chautha step me context ko update karna hota hai

function App() {

  //Iss concept me humne ye sikha ki hum ek context create kar sakte hai aur us context ko apne components me provide kar sakte hai. Aur phir hum us context ko apne components me consume kar sakte hai. Aur agar hume us context ko update karna hai to hum us context ko update bhi kar sakte hai.

  const[user, setUser] = useState({name: "Raj Shekhar", age: 24, email: "raj45@gmail.com"});

  return (
    <>
      <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider>
    </>
  )
}

export default App
export {UserContext}
