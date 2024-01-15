import { useId, useState } from "react";
import "./Modal.css";

function Modal({ className, modalRef, setName }) {

    const [enteredName, setEnteredName] = useState("");
    const [showError, setShowError] = useState(false);

    const id = useId();

    function onChange(event) {
        setEnteredName(event.target.value);
        if(event.target.value === "") {
            setShowError(true);
        } else {
            setShowError(false);
        }
    }

    function onSubmit(event) {
        event.preventDefault();
        if(enteredName !== "") {
            setName(enteredName);
            modalRef.current.close();
        } else {
            setShowError(true);
        }
    }

    return(
        <dialog className={`modal ${className}`} ref={modalRef}>
            <form className="name-form" onSubmit={onSubmit}>
                <h2 className="name-form__heading">Edit Username</h2>
                {showError && <span className="name-form__error-span">Username cannot be empty</span>}
                <label className="name-form__label" htmlFor={`name-${id}`}>Username: </label>
                <input className="name-form__input" id={`name-${id}`} value={enteredName} onChange={onChange}></input>
                <div className="name-form__buttons">
                    <button className="name-form__submit-button" type="submit">Change</button>
                    <button className="name-form__close-button" type="button" onClick={() => { modalRef.current.close(); }}>Cancel</button>
                </div>
            </form>
        </dialog>
    );
    
}

export default Modal;