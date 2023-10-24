/* eslint-disable react/prop-types */


const TodoComputed = ({computedItemsLeft, clearCompleted}) => { 
    
    return (    
        <section className="flex justify-between rounded-b-md px-4 py-4 dark:bg-gray-800">
            <span className="text-gray-300">{computedItemsLeft} Items left</span>
            <button
              onClick={clearCompleted}
              className="text-gray-300 hover:text-blue-700 dark:hover:text-blue-400"
              >Clear
              completed</button>
        </section>
    )
 }

 export default TodoComputed 

