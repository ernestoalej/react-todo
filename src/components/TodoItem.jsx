/* eslint-disable react/prop-types */
import IconCross from "./icons/IconCross"
import TodoCheck from "./TodoCheck"

const TodoItem = ({todo, deleteTodo, updateTodo}) => { 

    const { id, title, completed } = todo
    
    return (
        <article className="flex gap-4 border-b border-b-gray-400 dark:text-gray-200">
        
        <TodoCheck checked = {completed} handleClick={() => updateTodo(id)} />

        <p className= {`grow text-gray-600 dark:text-gray-200 ${completed && 'line-through'}`}>
            { title }
        </p>
        <button className="flex-none" onClick={() => deleteTodo(id)}>
            <IconCross />
        </button>
    </article>     
    )
 }

 export default TodoItem