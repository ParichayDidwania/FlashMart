import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Result from './Result';
import Cart from './Cart';
import Settings from './Settings';
import Checkout from './Checkout';
import Privacy from './Privacy';
import Security from './Security';
import CancellationAndReturns from './CancellationAndReturns';

function App() {
  const [theme, setTheme] = useState(1);
  const [name, setName] = useState("Guest");
  const [page, setPage] = useState("");
  const [cart, setCart] = useState([]);

  let skiplink_href = "";

  useEffect(() => {
    function handlePageLoad() {
      setPage(document.location.hash || "#/");
    }

    handlePageLoad();

    window.addEventListener('popstate', handlePageLoad);

    return () => {
      window.removeEventListener('popstate', handlePageLoad);
    }
  }, []);

  skiplink_href = page.includes("#main") ? page : `${page}#main`;

  return (
    <div className={`page ${theme == 1 ? "page--dark-theme" : "page--light-theme"}`}>
      <a className="page__skiplink" href={skiplink_href}>Skip to content</a>
      <Header className="page__header"/>
      {["#/", "#/#main"].includes(page) && <Home className="page__main" setPage={setPage} cart={cart} setCart={setCart} name={name}/>}
      {page.includes("#/search") && <Result className="page__main" setPage={setPage} cart={cart} setCart={setCart} />}
      {page.includes("#/cart") && <Cart className="page__main" setPage={setPage} cart={cart} setCart={setCart} />}
      {page.includes("#/settings") && <Settings className="page__main" setTheme={setTheme} setName={setName} />}
      {page.includes("#/checkout") && <Checkout className="page__main" setCart={setCart} />}
      {page.includes("#/privacy") && <Privacy className="page__main"/>}
      {page.includes("#/security") && <Security className="page__main"/>}
      {page.includes("#/cancellation-and-returns") && <CancellationAndReturns className="page__main"/>}
      <Footer className="page__footer"/>
    </div>
  )
}

export default App
