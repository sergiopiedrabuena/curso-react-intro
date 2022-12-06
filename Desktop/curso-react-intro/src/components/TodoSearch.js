import React from "react";
import { TodoContext } from "../context/TodoContext";
import '../styles/TodoSearch.scss'

const TodoSearch = () => {
    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    const onSearchValueChange = (e) => {
        console.log(e.target.value);
        setSearchValue(e.target.value);
    }

    return(
        <input
            className="TodoSearch"
            placeholder="Cebolla"
            value={searchValue}
            onChange={onSearchValueChange}
        />
    )
}

export {TodoSearch}