
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'
import { useTodos } from '../hooks/useTodos';

const TodoApp = () => {   
    
    const {todoState, allTodoCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo} = useTodos();

    

  return (
    <>
        <h1>TodoApp {allTodoCount},<small> pendientes: {pendingTodosCount}</small></h1>
        <hr />

        <div className='row'>
            <div className="col-7">
                {/* TodoList*/}
                <TodoList todos={todoState} onDeleteTodo={ handleDeleteTodo } onToggleTodo={handleToggleTodo}/>
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