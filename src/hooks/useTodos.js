import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

/* const initialState = []; */

const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || [];
}

export const useTodos = () => {

    const [todoState, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todoState) || []);
    }, [todoState])

    const allTodoCount = todoState.length;

    const pendingTodosCount = todoState.filter( todo => !todo.done).length;

    const handleNewTodo = ( todo ) => {
        const action = {
            type: 'Add todo',
            payload: todo
        }

        dispatch(action); // El dispatch es la funcion que utilizo para enviarle la accion al reducer
    }

    const handleDeleteTodo = (id) => {
        const action = {
            type: 'Remove todo',
            payload: id
        }

        dispatch(action);
    }

    const handleToggleTodo = (id) => {
        const action = {
            type: 'Toggle todo',
            payload: id
        }

        dispatch(action);
    }

    return {
        todoState,
        allTodoCount,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
} 