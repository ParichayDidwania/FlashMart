import "./Footer.css"

function Footer({className}) {
    return(
        <footer className={ `footer ${className}` }>
            <ul className="footer__list">
                <li className="footer__item"><a className="footer__link" href="#/privacy">Privacy Policy</a></li>
                <li className="footer__item"><a className="footer__link" href="#/security">Secuity</a></li>
                <li className="footer__item"><a className="footer__link" href="#/cancellation-and-returns">Cancellation & Returns</a></li>
            </ul>
        </footer>
    )
}

export default Footer;