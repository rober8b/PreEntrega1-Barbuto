import "./App.css"
import React from "react";
import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
import Footer from "./components/footer"

function App() {
  return (
    <div className="App">
     <Navbar />
     <ItemListContainer  greeting={"Welcome!"}/>
     <Footer />
    </div>
  );
}

export default App;
