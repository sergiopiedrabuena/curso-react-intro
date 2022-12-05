import React from 'react';

function useLocalStorage(itemName, initialValue) {
    
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    // Guardamos nuestros TODOs del localStorage en nuestro estado
    const [item, setItem] = React.useState(initialValue);

    //simulacion de llamada de api/evento externo
    React.useEffect(() => {
        setTimeout(() => {
            try{
                // Traemos nuestros TODOs almacenados
            const localStorageItem = localStorage.getItem(itemName);
            let parsedItem;

            if (!localStorageItem) {
                // Si el usuario es nuevo no existe un item en localStorage, por lo tanto guardamos uno con un array vacío
                localStorage.setItem(itemName, [JSON.stringify(initialValue)]);
                parsedItem = [];
            } else {
                // Si existen TODOs en el localStorage los regresamos como nuestros todos
                parsedItem = JSON.parse(localStorageItem);
            }

            setItem(parsedItem);
            setLoading(false);
            }catch(error) {
                setError(error)
            }
        }, 1000)
    });
    //persistencia de datos con localStorage
    const saveItem = (newTodos) => {
        const stringifyTodos = JSON.stringify(newTodos);
        localStorage.setItem(itemName, stringifyTodos);
        setItem(newTodos);
    }

    return {
        item,
        saveItem,
        loading,
        error
    }
}

export default useLocalStorage;