import "./AddToCart.css";

function AddToCart({ className, id, cart, setCart }) {
    let isProductPresent = false;
    let quantity = 0;
    let addToCartJsx = "";
    for(const product of cart) {
        if(product.id === id && product.quantity > 0) {
            isProductPresent = true;
            quantity = product.quantity;
            break;
        }
    }

    function addToCart() {
        const productObj = {
            id: id,
            quantity: 1
        }

        setCart([...cart, productObj]);
    }

    function removeFromCart() {
        let cartCopy = cart.filter(product => product.id !== id);
        setCart([...cartCopy]);
    }

    function decreaseQuantity() {
        let cartCopy = [...cart];
        for(const product of cartCopy) {
            if(product.id === id) {
                product.quantity --;
                if(product.quantity <= 0) {
                    removeFromCart();
                    return;
                }
                break;
            }
        }

        setCart([...cartCopy]);
    }

    function increaseQuantity() {
        let cartCopy = [...cart];
        for(const product of cartCopy) {
            if(product.id === id) {
                product.quantity ++;
                break;
            }
        }
        setCart([...cartCopy]);
    }

    if(isProductPresent) {
        addToCartJsx = 
        <div className={`add-to-cart-content ${className}`}>
            <button className="add-to-cart-content__remove-button" onClick={() => { decreaseQuantity(); }}>&#8722;</button>
            <span className="add-to-cart-content__quantity-span">{quantity}</span>
            <button className="add-to-cart-content__add-button" onClick={() => { increaseQuantity(); }}>&#43;</button>
        </div>
    } else {
        addToCartJsx = <button className={`add-to-cart-button ${className}`} onClick={() => { addToCart(); }}>Add to Cart</button>
    }

    return(
        <>
            {addToCartJsx}
        </>
    );
} 

export default AddToCart;