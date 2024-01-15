import "./Cart.css";
import products from "./product";
import Panel from "./Panel";

function Cart({ className, cart, setCart }) {
    let totalAmount = 0;
    const productPanels = cart.map(product => {
        const productInfo = products.find(item => item.id === product.id);
        totalAmount += productInfo.price * product.quantity;
        return(
            <Panel key={productInfo.id} className="result-main__panel" {...productInfo} cart={cart} setCart={setCart} isCart={true}/>
        )
    })

    return(
        <main className={`cart-main ${className}`} id="/cart#main">
            {productPanels}
            {
                productPanels.length > 0 ? 
                <>
                    <div className="cart-main__summary">
                        <span className="cart-main__total-span">
                            Total is : ${totalAmount.toFixed(2)}
                        </span>
                        <a className="cart-main__checkout-link" href="#/checkout">
                            Checkout
                        </a>
                    </div> 
                </> 
                : <span className="cart-main__empty-cart-span">Your Cart is empty</span>
            }
        </main>
    );
    
}

export default Cart;