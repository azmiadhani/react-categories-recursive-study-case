import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Theme } from "react-daisyui";

function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="h-52 w-52 bg-black text-white flex flex-col justify-center items-center">
        Alright!
        <Button color="primary">click clock!</Button>
      </div>
    </div>
  );
}

export default App;
