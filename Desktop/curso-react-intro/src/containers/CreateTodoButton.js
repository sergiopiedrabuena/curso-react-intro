import React from "react";
import '../styles/CreateTodoButton.scss'

const CreateTodoButton = (props) => {
    const onClickButton = () => {
        let msg="Mensaje por clickeo de boton";
        alert(msg);
    };

    return (
        <button className="CreateTodoButton" onClick={() => onClickButton()}
        >+</button>
    )
}
export { CreateTodoButton }