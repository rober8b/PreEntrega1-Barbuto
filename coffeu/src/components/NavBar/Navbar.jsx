import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return ( 
    <div className="navbar">
     <div className="navbar-container">
      <div className="logo">
         <img  className="logo-img" src="https://res.cloudinary.com/dx719oxg1/image/upload/v1669308261/coffee-png_hmzm9d.webp" />
         <h2>CoffeU</h2>
      </div>
         <button className="buttons-navbar">Iced Coffes</button>
         <button className="buttons-navbar">Hot Coffes</button>
         <button className="buttons-navbar">Pastry Shop</button>
           <CartWidget />
      </div>
    </div>
    );
}

export default Navbar;