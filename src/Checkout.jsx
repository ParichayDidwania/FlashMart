import { useEffect, useId, useState } from "react";
import "./Checkout.css";

function Checkout({ className, setCart }) {

    const id = useId();

    const [billingBoxChecked, setBillingBoxChecked] = useState(false);

    const [shippingAddress, setShippingAddress] = useState("");
    const [shippingAddressErrorText, setShippingAddressErrorText] = useState("");

    const [shippingCity, setShippingCity] = useState("");
    const [shippingCityErrorText, setShippingCityErrorText] = useState("");

    const [shippingState, setShippingState] = useState("");
    const [shippingStateErrorText, setShippingStateErrorText] = useState("");

    const [shippingCode, setShippingCode] = useState("");
    const [shippingCodeErrorText, setShippingCodeErrorText] = useState("");


    const [billingAddress, setBillingAddress] = useState("");
    const [billingAddressErrorText, setBillingAddressErrorText] = useState("");

    const [billingCity, setBillingCity] = useState("");
    const [billingCityErrorText, setBillingCityErrorText] = useState("");

    const [billingState, setBillingState] = useState("");
    const [billingStateErrorText, setBillingStateErrorText] = useState("");

    const [billingCode, setBillingCode] = useState("");
    const [billingCodeErrorText, setBillingCodeErrorText] = useState("");

    const numberRegex = new RegExp('^\\d+$');

    const [orderPlaced, setOrderPlaced] = useState(false);

    function onCheckBoxSelectionChange() {
        setBillingBoxChecked(!billingBoxChecked);
    }

    useEffect(() => {
        if(billingBoxChecked) {
            setBillingAddressErrorText("");
            setBillingCityErrorText("");
            setBillingStateErrorText("");
            setBillingCodeErrorText("");

            setBillingAddress(shippingAddress);
            setBillingCity(shippingCity);
            setBillingState(shippingState);
            setBillingCode(shippingCode);
        }
    }, [billingBoxChecked, shippingAddress, shippingCity, shippingState, shippingCode])

    function onChangeShippingAddress(event) {
        setShippingAddress(event.target.value);
        if(event.target.value !== "") {
            setShippingAddressErrorText("");
        } else {
            setShippingAddressErrorText("Shipping address is required");
        }
    }

    function onChangeShippingCity(event) {
        setShippingCity(event.target.value);
        if(event.target.value !== "") {
            setShippingCityErrorText("");
        } else {
            setShippingCityErrorText("Shipping city is required");
        }
    }

    function onChangeShippingState(event) {
        setShippingState(event.target.value);
        if(event.target.value !== "") {
            setShippingStateErrorText("");
        } else {
            setShippingStateErrorText("Shipping state is required");
        }
    }

    function onChangeShippingCode(event) {
        setShippingCode(event.target.value);
        if(event.target.value !== "") {
            if(numberRegex.test(event.target.value)) {
                setShippingCodeErrorText("");
            } else {
                setShippingCodeErrorText("Shipping code should be number");
            }
        } else {
            setShippingCodeErrorText("Shipping code is required");
        }
    }

    function onChangeBillingAddress(event) {
        setBillingAddress(event.target.value);
        if(event.target.value !== "") {
            setBillingAddressErrorText("");
        } else {
            setBillingAddressErrorText("Billing address is required");
        }
    }

    function onChangeBillingCity(event) {
        setBillingCity(event.target.value);
        if(event.target.value !== "") {
            setBillingCityErrorText("");
        } else {
            setBillingCityErrorText("Billing city is required");
        }
    }

    function onChangeBillingState(event) {
        setBillingState(event.target.value);
        if(event.target.value !== "") {
            setBillingStateErrorText("");
        } else {
            setBillingStateErrorText("Billing state is required");
        }
    }

    function onChangeBillingCode(event) {
        setBillingCode(event.target.value);
        if(event.target.value !== "") {
            if(numberRegex.test(event.target.value)) {
                setBillingCodeErrorText("");
            } else {
                setBillingCodeErrorText("Billing code should be number");
            }
        } else {
            setBillingCodeErrorText("Billing code is required");
        }
    }

    function onSubmit(event) {
        event.preventDefault();

        let errorFound = false;

        if(shippingAddress === "") {
            setShippingAddressErrorText("Shipping address is required");
            errorFound = true;
        } 
        
        if(shippingCity === "") {
            setShippingCityErrorText("Shipping city is required");
            errorFound = true;
        }
        
        if(shippingState === "") {
            setShippingStateErrorText("Shipping state is required");
            errorFound = true;
        }

        if(shippingCode === "") {
            setShippingCodeErrorText("Shipping code is required");
            errorFound = true;
        }

        if(!billingBoxChecked) {
            if(billingAddress === "") {
                setBillingAddressErrorText("Billing address is required");
                errorFound = true;
            } 
            
            if(billingCity === "") {
                setBillingCityErrorText("Billing city is required");
                errorFound = true;
            }
            
            if(billingState === "") {
                setBillingStateErrorText("Billing state is required");
                errorFound = true;
            }
    
            if(billingCode === "") {
                setBillingCodeErrorText("Billing code is required");
                errorFound = true;
            }
        }

        if(errorFound) {
            return;
        }

        setCart([]);
        setOrderPlaced(true);
    }   

    return(
        <main className={`checkout-main ${className}`} id="/checkout#main">
            {!orderPlaced ?
                <form className="address-form" onSubmit={onSubmit}>
                    <h2 className="address-form__heading">Enter your address</h2>
                    <span className="address-form__info">All fields marked with an Asterisk(<span className="address-form__info address-form--required">*</span>) are required</span>
                    
                    <div className="address-form__input-content">
                        <div className="address-form__shipping-content">
                            <h3 className="address-form__subheading">Shipping Details</h3>
                            
                            <label className="address-form__label" htmlFor={`shipping-address-${id}`}>Address <span className="address-form__label address-form--required">*</span></label>
                            {shippingAddressErrorText.length > 0 && <span className="address-form__error-span">{shippingAddressErrorText}</span>}
                            <input id={`shipping-address-${id}`} className="address-form__input" name="address" value={shippingAddress} onChange={onChangeShippingAddress}></input>

                            <label className="address-form__label" htmlFor={`shipping-city-${id}`}>City <span className="address-form__label address-form--required">*</span></label>
                            {shippingCityErrorText.length > 0 && <span className="address-form__error-span">{shippingCityErrorText}</span>}
                            <input id={`shipping-city-${id}`} className="address-form__input" name="city" value={shippingCity} onChange={onChangeShippingCity}></input>

                            <label className="address-form__label" htmlFor={`shipping-state-${id}`}>State <span className="address-form__label address-form--required">*</span></label>
                            {shippingStateErrorText.length > 0 && <span className="address-form__error-span">{shippingStateErrorText}</span>}
                            <input id={`shipping-state-${id}`} className="address-form__input" name="state" value={shippingState} onChange={onChangeShippingState}></input>

                            <label className="address-form__label" htmlFor={`shipping-code-${id}`}>Postal Code <span className="address-form__label address-form--required">*</span></label>
                            {shippingCodeErrorText.length > 0 && <span className="address-form__error-span">{shippingCodeErrorText}</span>}
                            <input id={`shipping-code-${id}`} className="address-form__input" name="code" value={shippingCode} onChange={onChangeShippingCode}></input>

                            <label className="address-form__label-checkbox" htmlFor={`billing-check-box-${id}`}>
                                <input id={`billing-check-box-${id}`} className="address-form__input-checkbox" type="checkbox" checked={billingBoxChecked} onChange={onCheckBoxSelectionChange}></input>
                                <span className="address-form__span">Billing address same as shipping address</span>
                            </label>
                        </div>
                    
                        <div className="address-form__billing-content">
                            <h3 className="address-form__subheading">Billing Details</h3>
                            
                            <label className="address-form__label" htmlFor={`billing-address-${id}`}>Address <span className="address-form__label address-form--required">*</span></label>
                            {billingAddressErrorText.length > 0 && <span className="address-form__error-span">{billingAddressErrorText}</span>}
                            <input id={`billing-address-${id}`} className={`address-form__input ${billingBoxChecked ? "address-form__input-readonly": ""}`} name="address" readOnly={billingBoxChecked} value={billingAddress} onChange={onChangeBillingAddress}></input>

                            <label className="address-form__label" htmlFor={`billing-city-${id}`}>City <span className="address-form__label address-form--required">*</span></label>
                            {billingCityErrorText.length > 0 && <span className="address-form__error-span">{billingCityErrorText}</span>}
                            <input id={`billing-city-${id}`} className={`address-form__input ${billingBoxChecked ? "address-form__input-readonly": ""}`} name="city" readOnly={billingBoxChecked} value={billingCity} onChange={onChangeBillingCity}></input>

                            <label className="address-form__label" htmlFor={`billing-state-${id}`}>State <span className="address-form__label address-form--required">*</span></label>
                            {billingStateErrorText.length > 0 && <span className="address-form__error-span">{billingStateErrorText}</span>}
                            <input id={`billing-state-${id}`} className={`address-form__input ${billingBoxChecked ? "address-form__input-readonly": ""}`} name="state" readOnly={billingBoxChecked} value={billingState} onChange={onChangeBillingState}></input>

                            <label className="address-form__label" htmlFor={`billing-code-${id}`}>Postal Code <span className="address-form__label address-form--required">*</span></label>
                            {billingCodeErrorText.length > 0 && <span className="address-form__error-span">{billingCodeErrorText}</span>}
                            <input id={`billing-code-${id}`} className={`address-form__input ${billingBoxChecked ? "address-form__input-readonly": ""}`} name="code" readOnly={billingBoxChecked} value={billingCode} onChange={onChangeBillingCode}></input>
                        </div>
                    </div>
                    
                    <button className="address-form__submit-button">Make Payment</button>
                </form>
            : <span className="checkout-main__order-span">Your order has been placed!</span>}
        </main>
    );
    
}

export default Checkout;