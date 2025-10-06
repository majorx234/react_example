import React from "react";

function Greeter() {
  const [greeting, setGreeting] = React.useState("");
  function handleGreetClick() {
    alert(`Hello0o, ${greeting}`);
  }

  const charsRemaining = greeting.length;
  const greetingInvalid = greeting.length === 0 || greeting.length > 10;
  return (
    <div>Greeting:
      <input value={greeting} onChange={e => setGreeting(e.target.value)}>
      </input>
      <span>{charsRemaining}</span>
      <button disabled={greetingInvalid} onClick={handleGreetClick}>Greet
      </button>
    </div>
  );
}

export default Greeter;
