import { useState } from "react";
import Input from "./Input";

function Login(props) {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState(""); // State to track if the name should be shown

  // function handleClicked(event) {
  // // Prevent form submission
  //   // Show the name when the button is clicked
  //   setName(event.target.value);
  // }

  // function handleChange() {
  //   // Update the name state
  //   setHeading(name);
  //   event.preventDefault(); 
  // }
    // Handles form submission
    function handleClicked(event) {
      event.preventDefault(); // Prevent form submission
      setHeading(name); // Update the heading when the form is submitted
    }
  
    // Handles input change
    function handleChange(event) {
      setName(event.target.value); // Update the name state as the user types
    }

  

  function onMouseOver() {
    const button = document.getElementById("btn");
    button.style.backgroundColor = "black";
    button.style.color = "white";
  }

  function onMouseOut() {
    const button = document.getElementById("btn");
    button.style.backgroundColor = "white";
    button.style.color = "black";
  }

  return (
    <form className="form" onSubmit={handleClicked}>
      <h1>Hello! {headingText}</h1>
      <Input
        type="text"
        placeholder="Username"
        value={name}
        onChange={handleChange}
      />
      <Input type="password" placeholder="Password" />
      {!props.IsRegistered && (
        <Input type="password" placeholder="Confirm Password" />
      )}
      <button
        type="submit"
        id="btn"
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        {props.IsRegistered ? "Login" : "Register"}
      </button>
    </form>
  );
}

export default Login;
