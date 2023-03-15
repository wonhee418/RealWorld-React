import React from "react";
import logo from "./logo.svg";
import "./App.css";

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB); //
}

const mergedObj = merge({ name: "kim", hobbies: ["Sports"] }, { age: 28 });
console.log(mergedObj); // { name: "kim", hobbies:["sprots"], age:28}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
