import "./Card.css"

function Card(){
    return (
    <div className="card">
         <img className="card-img" src="https://res.cloudinary.com/dx719oxg1/image/upload/v1669307382/EspressoIntro_LongShadow_0_vkm3cp.webp"/>
        <div className="card-info">
            <p>lorem ipsum</p>
        </div>
          <h2>$30</h2>
          <button className="btn-buy">Add Cart</button>
    </div>
    )
}

export default Card;