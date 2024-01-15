import { useEffect, useId, useState } from "react";
import "./Search.css";
import suggestions from "./suggestions";

function Search({ className, setPage, searchTextValue = "" }) {
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        setSearchText(searchTextValue);
    }, [searchTextValue]);

    const suggestionItems = suggestions.map(item => {
        return(
            <option className="search-bar__input-option" key={item} value={item}>{item}</option>
        )
    })

    const id = useId();

    function onSubmit(event) {
        event.preventDefault();
        const hash = `#/search?searchInput=${searchText}`;
        window.history.pushState(null, '', hash);
        setPage(hash);
    }   

    function onChange(event) {
        setSearchText(event.target.value);
    }

    return(
        <form className={ `search-bar ${className}` } action="#/search" method="GET" onSubmit={onSubmit}>
            <label className="search-bar__label" htmlFor={`search-${id}`}>Search</label>
            <input className="search-bar__input" id={`search-${id}`} type="text" name="searchInput" placeholder="Search Flashcart" list={`datalist-${id}`} value={searchText} onChange={onChange}></input>
            <datalist id={`datalist-${id}`} className="search-bar__input-datalist">
                {suggestionItems}
            </datalist>
            <button className="search-bar__submit-button" type="submit" aria-label="Search for products">
                <div className="search-bar__gg-search" aria-hidden="true"></div>
            </button>
        </form>
    );
}

export default Search;