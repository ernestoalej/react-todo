import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon"

const App = () => {
    return (
        <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-gray-300 min-w-screen min-h-screen bg-no-repeat bg-contain">
            <header className="container mx-auto px-4 pt-4">
                <div className="flex justify-between">
                    <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">
                        Todo
                    </h1>
                    <button><MoonIcon className="fill-red-500" /></button>
                </div>
                <form className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 mt-4">
                    {/* Llegué hasta el minuto 3:38 */}
                    <span className="inline-block h-6 w-5 rounded-full border-2"></span>
                    <input
                        type="text"
                        placeholder="Create a new todo..."
                        className="w-full text-gray-400 outline-none"
                    />
                </form>
            </header>
            <main className="container mx-auto mt-4 px-4">
                <div className="rounded-md bg-white [&>article]:p-4" >
                    <article className="flex gap-4 border-b-gray-400 border-b">
                        <button className="inline-block h-5 w-5 rounded-full border-2 className= flex-none"></button>
                        <p className="text-gray-600 grow">
                            Complete online Javascript course in blueweb
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>

                    <article className="flex gap-4 border-b-gray-400 border-b">
                        <button className="inline-block h-5 w-5 rounded-full border-2 className= flex-none"></button>
                        <p className="text-gray-600 grow">
                            Complete online Javascript course in blueweb
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>

                    <article className="flex gap-4 border-b-gray-400 border-b">
                        <button className="inline-block h-5 w-5 rounded-full border-2 className= flex-none"></button>
                        <p className="text-gray-600 grow">
                            Complete online Javascript course in blueweb
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>

                    <article className="flex gap-4 border-b-gray-400 border-b">
                        <button className="inline-block h-5 w-5 rounded-full border-2 className= flex-none"></button>
                        <p className="text-gray-600 grow">
                            Complete online Javascript course in blueweb
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>


                    <section className="py-4 px-4 flex justify-between">
                        <span className="text-gray-500">5 Items left</span>
                        <span className="text-gray-500">Clear completed</span>
                     </section>
               

               </div>

               
            </main>

            <section className="container mx-auto px-4 mt-4">
               <div className="bg-white p-4 rounded-md flex justify-center gap-4">
                  <button className="text-blue-600">All</button>
                  <button className="hover:text-blue-600">Active</button>
                  <button className="hover:text-blue-600">Completed</button>
               </div>
            </section>

            <p className="text-center mt-4"> Drag and drop to reorder list </p>
        </div>
    );
};

export default App;
