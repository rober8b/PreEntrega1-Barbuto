import "./CartNav.css"

const CartWidget = () => {
    return(
    <div className="cart-container">
        <img  className="cart-img" src="https://res.cloudinary.com/dx719oxg1/image/upload/v1669307612/107831_tt4wxl.png" />
        <b className="cart-number">10</b>
    </div>
    );
};

export default CartWidget;