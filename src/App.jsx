/* eslint-disable no-unused-vars */
import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import { useEffect, useState } from "react";

// Corregir error en despliegue. Valida primero que se tenga valor y luego hacer el parse:
const storedTodos = localStorage.getItem('todos');
const initialStateTodos = storedTodos ? JSON.parse(storedTodos) : [];


const App = () => {

    const [ todos, setTodos] = useState(initialStateTodos);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const createTodo = (title, completed) => {
        const newTodo ={
                id: Date.now(),
                title: title,
                completed: false
        }

        setTodos([...todos, newTodo])
    }

    const deleteTodo = (id) => {

         const res = todos.filter( t => t.id !== id)

         setTodos(res)
    }

    const clearCompleted = () => {    
        const res = todos.filter( t => !t.completed)

        setTodos(res)
   }

    const [filter, setFilter] = useState('all')

    const filteredTodos = () => {
         switch(filter) {
         case "all":
            return todos 
          case "active":
                return todos.filter(f => !f.completed)
          case "completed":
            return todos.filter(f => f.completed)
          default: 
            return todos
        }
    }


    const updateTodo = (id) => {

        const updatedItems = todos.map(todo =>
            todo.id === id
              ? { ...todo, completed: !todo.completed }
              : todo
          );

        setTodos(updatedItems)
    }

    
    const computedItemsLeft =  todos.filter(todo => !todo.completed).length


    return (
     <div style={{ transition: 'all 1000ms ease-in-out !important'}}>        
           <div 
             className="min-h-screen bg-gray-300 bg-contain bg-no-repeat dark:bg-gray-900 
             bg-[url('./assets/images/bg-mobile-light.jpg')]
             md:bg-[url('./assets/images/bg-desktop-light.jpg')]
             dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]
             md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]
             transition-all duration-1000"
           >
               <Header/>
        
               <main className="container mx-auto mt-8 px-4 md:max-w-xl">
                   <TodoCreate createTodo={createTodo} />
        
                   <TodoList todos={filteredTodos()} deleteTodo={deleteTodo} updateTodo= {updateTodo} />
                   <TodoComputed         
                     clearCompleted={clearCompleted}
                     computedItemsLeft={computedItemsLeft} />
                   <TodoFilter changeFilter = {setFilter} filter = {filter}/>
               </main>
        
               <footer className="dark:bg-gray-900 dark:text-gray-400 mt-8 text-center">
                   Drag and drop to reorder list
               </footer>
           </div>
     </div>
    );
};

export default App;
