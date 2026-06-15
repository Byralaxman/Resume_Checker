import React from "react";
import Navbar from "./components/Navbar";
import UploadResume from "./components/UploadResume";
import "./styles/App.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <UploadResume />
      </div>
    </div>
  );
}

export default App;
