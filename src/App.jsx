import React from "react";

function Buttonx(greetingInvalid, handleGreetClick) {
  return <button disabled={greetingInvalid} onClick={handleGreetClick}>Greet</button>
}

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
      <Buttonx greetingInvalid={greetingInvalid} handleGreetClick={handleGreetClick}></Buttonx>
      <span>{charsRemaining}</span>
    </div>
  );
}

export default Greeter;
