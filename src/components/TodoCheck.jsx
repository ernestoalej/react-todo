import IconCheck from "./icons/IconCheck";

/* eslint-disable react/prop-types */

const TodoCheck = ({ checked, handleClick }) => {
 
    return (
        <button onClick={handleClick} className="h-6 w-6 flex-none rounded-full border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center">
            {checked && <IconCheck />}
        </button>
    );
};

export default TodoCheck;
