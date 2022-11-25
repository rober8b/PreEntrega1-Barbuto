import Card from "./Card"
import "./ItemList.css"

function ItemListContainer({greeting}){
    return(
    <div className="home_container">
        <h1 className="greeting" >{greeting}</h1>
        <div className="card-container">
           <Card />
           <Card />
           <Card />
           <Card />
        </div>
    </div> 
    )
}

export default ItemListContainer;