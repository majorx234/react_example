// import React from "react";
function Buttonx(greetingInvalid, handleGreetClick) {
  return /*#__PURE__*/React.createElement("button", {
    disabled: greetingInvalid,
    onClick: handleGreetClick
  }, "Greet");
}
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
  }), /*#__PURE__*/React.createElement(Buttonx, {
    greetingInvalid: greetingInvalid,
    handleGreetClick: handleGreetClick
  }), /*#__PURE__*/React.createElement("span", null, charsRemaining));
}
// export default Greeter;

