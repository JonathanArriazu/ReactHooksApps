
export const todoReducer = (initialState = [], action = {}) => {

    switch( action.type) {
        case 'Add todo':
            //Agregamos el todo recibido desde action.payload
            return [...initialState, action.payload ];
        
        case 'Remove todo':
            //Eliminamos el todo recibido desde action.payload, realizando un filter
            //para mantener a todos los demas que tengan una id deferente a este
            return initialState.filter(  todo => todo.id !== action.payload);

        case 'Toggle todo':
            return initialState.map(  todo => {

                if (todo.id === action.payload) {
                    //si el todo tiene el mismo id, cambiamos su estado "done"
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo
            });

        default:
            return initialState;
    }

}

