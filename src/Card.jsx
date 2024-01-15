import AddToCart from "./AddToCart";
import "./Card.css";

function Card({ className, heading, price, src, alt, id, cart, setCart }) {
    return(
        <div className={ `card ${className}` }>
            <img className="card__image" src={src} alt={alt}></img>
            <h2 className="card__heading">{heading}</h2>
            <p className="card__price">$ {price}</p>
            <AddToCart className="card__button" id={id} cart={cart} setCart={setCart}/>
        </div>
    );
}

export default Card;