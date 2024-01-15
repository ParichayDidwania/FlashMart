import './Header.css';
import NavBar from './NavBar';

function Header({className}) {
    return (
        <header className={`header ${className}`}>
            <h1 className='header__heading'>FlashMart</h1>
            <NavBar className="header__nav"/>
        </header>
    );
}

export default Header;