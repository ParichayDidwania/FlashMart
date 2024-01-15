import { useEffect, useState } from "react";
import Panel from "./Panel";
import "./Result.css";
import Search from "./Search";
import products from "./product";

function Result({ className, setPage, cart, setCart }) {

    const [productList, setProductList] = useState([]);
    const [notFoundSpan, setNotFoundSpan] = useState("");
    const [sortListOpenClass, setSortListOpenClass] = useState("");
    const [sortMode, setSortMode] = useState(0);

    const hash = document.location.hash;
    let searchTag = (hash.split("=")[1]).split("#")[0];
    searchTag = searchTag.replaceAll("%20", " ");

    useEffect(() => {
        const productArr = sortProducts(products.filter(product => product.tag === searchTag), sortMode);
        if(productArr.length > 0) {
            const productPanels = productArr.map((item) => {
                return(
                    <Panel key={item.id} className="result-main__panel" {...item} cart={cart} setCart={setCart}/>
                );
            });
            setProductList([...productPanels]);
            setNotFoundSpan("");
        } else {
            const noProdFoundSpan = <span className="result-main__span">No products found</span>
            setProductList([]);
            setNotFoundSpan(noProdFoundSpan);
        }
        
    }, [searchTag, cart, setCart, sortMode]);

    function sortProducts(productArr, mode = 0) {
        productArr.sort((a, b) => {
            if(mode === 0) {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        })
        return productArr;
    }

    function toggleSortList() {
        if(sortListOpenClass === "") {
            setSortListOpenClass("result-main__toolbar__list--open");
        } else {
            setSortListOpenClass("");
        }
    }

    function handleSort(mode = 0) {
        setSortMode(mode);
        toggleSortList();
    }

    return(
        <main className={`result-main ${className}`} id={`/search?searchInput=${searchTag}#main`}>
            <Search className="result-main__search" setPage={setPage} searchTextValue={searchTag}/>
            <div className="result-main__toolbar">
                <span className="result-main__toolbar__info">{productList.length} Results Found</span>
                <button className="result-main__toolbar__button" onClick={() => { toggleSortList(); }}>Sort</button>
                <ul className={`result-main__toolbar__list ${sortListOpenClass}`}>
                    <li className="result-main__toolbar__item"><button className="result-main__toolbar__sort-button" onClick={() => { handleSort(0) }}>Price : Low to High</button></li>
                    <li className="result-main__toolbar__item"><button className="result-main__toolbar__sort-button" onClick={() => { handleSort(1) }}>Price : High to Low</button></li>
                </ul>
            </div>
            {notFoundSpan}
            {productList}
        </main>
    );
}

export default Result;