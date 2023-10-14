import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'

const TodoApp = () => {

    const initialState = [
        {
            id: new Date().getTime(),
            description: 'Recolectar la piedra del Alma',
            donde: false
        },
        {
            id: new Date().getTime() *2,
            description: 'Recolectar la piedra del Tiempo',
            donde: false
        }
    ]

    const [todoState, dispatch] = useReducer(todoReducer, initialState)

    const handleNewTodo = ( todo ) => {
        console.log({todo})
    }

  return (
    <>
        <h1>TodoApp 10,<small> pendientes: 2</small></h1>
        <hr />

        <div className='row'>
            <div className="col-7">
                {/* TodoList*/}
                <TodoList todos={todoState}/>
                {/* FIN TODO LIST */}
            </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                {/* TodoAdd onNewTodo( todo )*/}
                {/* {id:: newDate()..., description: '', done: false} */}
                <TodoAdd onNewTodo={handleNewTodo} />
                {/* Fin TodoApp */}
            </div>
        </div>


    </>
  )
}

export default TodoApp