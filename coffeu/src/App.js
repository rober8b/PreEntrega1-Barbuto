import "./App.css"
import React from "react";
import Navbar from "./components/NavBar/Navbar"
import ItemListContainer from "./components/ItemList/ItemListContainer"
import Footer from "./components/Footer/footer"

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
