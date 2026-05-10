

function App() {

  function handleClick(){
    alert("Button was clicked")
  }

  function handleMouseOver(){
    alert("Mouse is over the text")
  }

  return (
    <div>
      <p onMouseOver={handleMouseOver}>Hey, I am a new React Developer.</p>

      <button onClick={handleClick}>Click Me</button>
    </div>

// React me hum onClick aur onMouseOver jaise event handlers ka use karke events handle karte hain.

// Jab button click hota hai, tab handleClick function call hota hai.
// Aur jab mouse paragraph ke upar jata hai, tab handleMouseOver function call hota hai.

// React me aur bhi events hote hain jaise:
// onChange → Jab input field ki value change hoti hai.
// onSubmit → Jab form submit hota hai.

// In events ki help se hum interactive React applications bana sakte hain.

// Important Note:
// React me event handlers camelCase me likhe jate hain
// jaise onClick, onMouseOver, etc.

// Hum function ko directly pass karte hain bina parentheses ke:
// onClick={handleClick}

// na ki:
// onClick={handleClick()}

// Kyunki hume function ko pass karna hota hai,
// turant execute nahi karna hota.

// Common React Events:
// onClick → Jab kisi element par click hota hai.
// onMouseOver → Jab mouse kisi element ke upar jata hai.
// onChange → Jab input field ki value change hoti hai.
// onSubmit → Jab form submit hota hai.

// onChangeColor → Jab input field ki value change hoti hai, tab text ka color change karne ke liye ek custom event handler.
  )
}

export default App
