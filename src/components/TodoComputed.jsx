/* eslint-disable react/prop-types */


const TodoComputed = ({computedItemsLeft, clearCompleted}) => { 
    
    return (    
        <section className="flex justify-between rounded-b-md px-4 py-4 bg-white dark:bg-gray-800 transition-all duration-1000">
            <span className="text-gray-400">{computedItemsLeft} Items left</span>
            <button
              onClick={clearCompleted}
              className="text-gray-400 hover:text-blue-700 dark:hover:text-blue-400"
              >Clear
              completed</button>
        </section>
    )
 }

 export default TodoComputed 

