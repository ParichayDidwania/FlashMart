import { useRef, useState } from "react";
import "./Settings.css";
import Modal from "./Modal";

function Settings({ className, setTheme, setName }) {

    const [errorText, setErrorText] = useState("");
    const [themeSelection, setThemeSelection] = useState(-1);
    const editUsernameModalRef = useRef();

    function onChange(event) {
        setThemeSelection(event.target.value);
        console.log(themeSelection);
    }

    function onSubmit(event) {
        event.preventDefault();
        if(themeSelection == -1) {
            setErrorText("Please select an option");
        } else {
            setErrorText("");
            setTheme(themeSelection);
        }
        console.log('triggered');
    }

    function editUsernameOnClick() {
        editUsernameModalRef.current.showModal();
    }

    return(
        <main className={`settings-main ${className}`} id="/settings#main">
            <Modal className="settings-main__edit-username-modal" modalRef={editUsernameModalRef} setName={setName}/>
            <form className="theme-form" onSubmit={onSubmit}>
                <h2 className="theme-form__heading">Select Theme</h2>
                
                {errorText !== "" && <span className="theme-form__error-span">{errorText}</span> }

                <label className="theme-form__label">
                    <input className="theme-form__input" type="radio" name="theme" value={1} onChange={onChange}></input>
                    <span className="theme-form__span">Dark</span>
                </label>

                <label className="theme-form__label">
                    <input className="theme-form__input" type="radio" name="theme" value={0} onChange={onChange}></input>
                    <span className="theme-form__span">Light</span>
                </label>

                <button className="theme-form__submit-button" type="submit">Apply</button>
            </form>
            <button className="settings-main__edit-username-button" onClick={editUsernameOnClick}>Edit Username</button>
        </main>
    );
}

export default Settings;