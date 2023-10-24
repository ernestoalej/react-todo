import TodoItem from "./TodoItem"


// eslint-disable-next-line react/prop-types
const TodoList = ({todos, deleteTodo, updateTodo }) => { 

    return (
        <div className="mt-4 rounded-t-md bg-white [&>article]:p-4">
        {
            // eslint-disable-next-line react/prop-types
            todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  deleteTodo
                  =
                  {deleteTodo}
                  updateTodo={updateTodo} />
            ))
        }          
        </div>
    )
 }

 export default TodoList