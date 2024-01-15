import Card from "./Card";
import "./Home.css";
import Search from "./Search";

import products from "./product";

function Home({ className, setPage, cart, setCart, name }) {
    return(
        <main className={`home-main ${className}`} id="/#main">
            <Search className={`home-main__search`} setPage={setPage}/>
            <span className="home-main__name-span">Hello {name}!</span>
            <Card {...products[0]} className="home-main__card" cart={cart} setCart={setCart}/>
            <Card {...products[1]} className="home-main__card" cart={cart} setCart={setCart}/>
            <Card {...products[2]} className="home-main__card" cart={cart} setCart={setCart}/>
        </main>
    );
    
}

export default Home;