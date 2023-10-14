

const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}];

//Con action le indicamos la accion necesaria a realizar para cambiar el estado.
const todoReducer = (state = initialState, action = {}) => {
    
    if(action.type === '[TODO] add todo') {
        return [...state, action.payload]
    }

    return state; // una condicion del reducer es que siempre devuelva une stado
};

let todos = todoReducer();

//Para modificar el estado, tenemos que mandarle una accion para realizarlo:
const newTodo = {
    id: 2,
    todo: 'Recolectar la priedra del poder',
    done: false
}

const addTodoAction = { // ASI LUCEN LAS ACCIONES
    type: '[TODO] add todo', // =>Tiene por estandar un "type" el cual no es mas que un simple string que nos dice cual es la accion realizada
    payload: newTodo // => payload es lo nuevo que quiero agregar o modificar al estado
}

todos = todoReducer( todos, addTodoAction );


console.log({state: todos})


