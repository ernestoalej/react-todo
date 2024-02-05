/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react"
import TodoCheck from "./TodoCheck"

const TodoCreate = ({createTodo}) => { 
    
    const [title, setTitle ] = useState('')
    const [completed, setCompleted] = useState(false)


    const handleSubmitAddTodo = (e) => {
        e.preventDefault()    
        
        if (!title.trim()){
            return setTitle('')
        }

        createTodo(title)
        setTitle('')
    }

   
    return (
        <>        
        <form
          onSubmit={handleSubmitAddTodo}
          className="dark:bg-gray-800 flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-4 transition-all duration-1000">
        <TodoCheck checked={completed} />
        <input
          value={title}
          type="text"
          placeholder="Create a new todo..."
          className="dark:bg-gray-800 w-full text-gray-500 outline-none transition-all duration-1000"
          onChange={(e)=>
          setTitle(e.target.value)} />
    </form>
        </>

    )
 }

 export default TodoCreate