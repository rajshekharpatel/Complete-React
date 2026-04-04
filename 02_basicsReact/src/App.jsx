import UserCard from "./assets/components/userCard";

import r45 from "./assets/r45.jpg";
import r46 from "./assets/r46.JPG";
import r47 from "./assets/r47.jpg";
import r48 from "./assets/r48.jpeg";

function App() {
  

  return (
    <>
      <div className="container">
        <UserCard name="Raj Shekhar Patel" desc="Software Engineer" image={r45} style={{"border-radius":  "20px"}}/>
        <UserCard name="Raj" desc="Product Manager" image={r46} style={{"border-radius":  "20px"}}/>
        <UserCard name="Developer" desc="Web Enthusiast" image={r47} style={{"border-radius":  "20px"}}/>
        <UserCard name="Engineer" desc="Passionate Developer" image={r48} style={{"border-radius":  "20px"}}/>
      </div>
    </>
  )
}

export default App
