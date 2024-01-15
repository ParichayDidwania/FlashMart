import AddToCart from "./AddToCart";
import "./Panel.css";

function Panel({ className, heading, price, src, alt, id, cart, setCart, isCart = false}) {
    return(
        <div className={ `panel ${className}` }>
            <img className={isCart ? "panel__image-cart" : "panel__image"} src={src} alt={alt}></img>
            <div className="panel__details">
                <h2 className="panel__heading">{heading}</h2>
                <p className="panel__price">$ {price}</p>
                <AddToCart className="panel__button" id={id} cart={cart} setCart={setCart}/>
            </div>
        </div>
    )
}

export default Panel;