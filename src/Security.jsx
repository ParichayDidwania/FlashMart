import { useState } from "react";
import "./Security.css";

function Security({ className }) {

    const [openAccordionAnswer1, setOpenaccordionAnswer1] = useState("");
    const [activeAccordionButton1, setActiveAccordionButton1] = useState("");

    const [openAccordionAnswer2, setOpenaccordionAnswer2] = useState("");
    const [activeAccordionButton2, setActiveAccordionButton2] = useState("");

    const [openAccordionAnswer3, setOpenaccordionAnswer3] = useState("");
    const [activeAccordionButton3, setActiveAccordionButton3] = useState("");

    const ariaExpandedAccordion1 = openAccordionAnswer1 === "" ? false : true;
    const ariaExpandedAccordion2 = openAccordionAnswer2 === "" ? false : true;
    const ariaExpandedAccordion3 = openAccordionAnswer3 === "" ? false : true;


    function onClickAccordion1() {
        if(openAccordionAnswer1 === "") {
            setOpenaccordionAnswer1("security-main__accordion-answer--open");
        } else {
            setOpenaccordionAnswer1("");
        }

        if(activeAccordionButton1 === "") {
            setActiveAccordionButton1("security-main__accordion-button--active");
        } else {
            setActiveAccordionButton1("");
        }   
    }

    function onClickAccordion2() {
        if(openAccordionAnswer2 === "") {
            setOpenaccordionAnswer2("security-main__accordion-answer--open");
        } else {
            setOpenaccordionAnswer2("");
        }

        if(activeAccordionButton2 === "") {
            setActiveAccordionButton2("security-main__accordion-button--active");
        } else {
            setActiveAccordionButton2("");
        }   
    }

    function onClickAccordion3() {
        if(openAccordionAnswer3 === "") {
            setOpenaccordionAnswer3("security-main__accordion-answer--open");
        } else {
            setOpenaccordionAnswer3("");
        }

        if(activeAccordionButton3 === "") {
            setActiveAccordionButton3("security-main__accordion-button--active");
        } else {
            setActiveAccordionButton3("");
        }   
    }

    return(
        <main className={`security-main ${className}`} id="/security#main">
            <h2 className="security-main__heading">Security</h2>
            
            <button className={`security-main__accordion-button ${activeAccordionButton1}`} onClick={onClickAccordion1} aria-expanded={ariaExpandedAccordion1}>Is it secure to make online transactions on FlashMart?</button>
            <div className={`security-main__accordion-answer ${openAccordionAnswer1}`}>
                <p className="security-main__accordion-paragraph">Yes, it is secure to make online transactions on FlashMart</p>
            </div>

            <button className={`security-main__accordion-button ${activeAccordionButton2}`} onClick={onClickAccordion2} aria-expanded={ariaExpandedAccordion2}>Are my card details stored on FlashMart?</button>
            <div className={`security-main__accordion-answer ${openAccordionAnswer2}`}>
                <p className="security-main__accordion-paragraph">No, we only store the last 4 digits of your card number to make it easier for you to identify your cards when making a payment</p>
            </div>

            <button className={`security-main__accordion-button ${activeAccordionButton3}`} onClick={onClickAccordion3} aria-expanded={ariaExpandedAccordion3}>What other payment methods are accepted on FlashMart?</button>
            <div className={`security-main__accordion-answer ${openAccordionAnswer3}`}>
                <p className="security-main__accordion-paragraph">Apart from credit/debit card, we also accept UPI payments as well</p>
            </div>
        </main>
    );
}

export default Security;