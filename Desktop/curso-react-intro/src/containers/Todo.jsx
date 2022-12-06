import React from 'react';
import { TodoCounter } from '../components/TodoCounter';
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { TodoSearch } from "../components/TodoSearch";
import { CreateTodoButton } from "../components/CreateTodoButton";

import Modal from '../components/Modal';

import { TodoContext } from '../context/TodoContext';

const Todo = () => {
    const {error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            {/* En caso de no utilizar el hook useContext:
            <TodoContext.Consumer>
                {(
                    { error,
                    loading,
                    searchedTodos,
                    completeTodo,
                    deleteTodo
                    }
                ) => {
                    return (*/}
                        <TodoList>
                            {error && <p>Hubo un error...</p>}
                            {loading && <p>Cargando lista..</p>}
                            {(!loading && !searchedTodos.length) && <p>Crea tu primer To do</p>}
                            
                            {searchedTodos.map(todo => (
                                <TodoItem
                                    key={todo.text}
                                    text={todo.text}
                                    completed={todo.completed}
                                    onComplete={() => completeTodo(todo.text)}
                                    onDelete={() => deleteTodo(todo.text)}
                                />
                            ))}
                        </TodoList>
            {/*                     )
                }}
            </TodoContext.Consumer>*/}

            {!!openModal && (
                <Modal>
                <p> uso de portales</p>
            </Modal>
            )}
            

            <CreateTodoButton 
                setOpenModal={setOpenModal}
            />
        </React.Fragment >
    )
}

export default Todo;