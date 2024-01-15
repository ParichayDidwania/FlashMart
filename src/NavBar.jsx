import { useState } from "react";
import "./NavBar.css";

function NavBar({className}) {

    const [navMenuOpenClass, setNavMenuOpenClass] = useState("");

    const ariaExpanded = navMenuOpenClass !== "nav__list--open" ? false : true;

    function onClick() {
        setNavMenuOpenClass((prev) => {
            if(prev === "" || prev === "nav__list--close") {
                return "nav__list--open";
            } else {
                return "nav__list--close";
            }
        })
    }

    return(
        <nav className={ `nav ${className}` }>
            <button className="nav__hambuger-button" onClick={onClick} aria-expanded={ariaExpanded}>
                <div className="nav__hambuger-button__gg-menu" aria-hidden="true"></div>
            </button>
            <ul className={`nav__list ${navMenuOpenClass}`}>
                <li className="nav__item"><a className="nav__link" href="#/">Home</a></li>
                <li className="nav__item"><a className="nav__link" href="#/cart">Cart</a></li>
                <li className="nav__item"><a className="nav__link" href="#/settings">Settings</a></li>
            </ul>
            
        </nav>
    )
}

export  default NavBar;