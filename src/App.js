import React from "react";
function Greeter() {
  const [greeting, setGreeting] = React.useState("");
  function handleGreetClick() {
    alert(`Hello0o, ${greeting}`);
  }
  const charsRemaining = greeting.length;
  const greetingInvalid = greeting.length === 0 || greeting.length > 10;
  return /*#__PURE__*/React.createElement("div", null, "Greeting:", /*#__PURE__*/React.createElement("input", {
    value: greeting,
    onChange: e => setGreeting(e.target.value)
  }), /*#__PURE__*/React.createElement("span", null, charsRemaining), /*#__PURE__*/React.createElement("button", {
    disabled: greetingInvalid,
    onClick: handleGreetClick
  }, "Greet"));
}
export default Greeter;

