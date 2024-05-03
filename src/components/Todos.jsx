import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";
import AddTodo from "./AddTodo"; // Import the AddTodo component

const Todos = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [newText, setNewText] = useState(""); // State to hold the new text for editing
  const [editTodoId, setEditTodoId] = useState(null); // State to hold the ID of the todo being edited

  const handleEditTodo = (todo) => {
    setEditTodoId(todo.id); // Set the ID of the todo being edited
    setNewText(todo.text); // Set the text of the todo in the input field
  };

  const handleUpdateTodo = () => {
    dispatch(updateTodo({ id: editTodoId, newText }));
    setEditTodoId(null); // Clear the edit todo ID
    setNewText(""); // Clear the input field
  };

  return (
    <>
      <div>Todos</div>
      {/* Render the AddTodo component */}
      
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="mt-4 flex justify-around items-center bg-zinc-800 px-4 py-2 rounded "
          >
            <div className="text-white">{todo.text}</div>
            <button
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-base"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-6 h-6"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"
                ></path>
              </svg>
            </button>
            {editTodoId === todo.id ? (
              <div>
                <input
                  type="text"
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <button
                  onClick={handleUpdateTodo}
                  className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Update Todo
                </button>
              </div>
            ) : (
              <button
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-base"
                onClick={() => handleEditTodo(todo)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 50 50"
                  s
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M 43.050781 1.9746094 C 41.800781 1.9746094 40.549609 2.4503906 39.599609 3.4003906 L 38.800781 4.1992188 L 45.699219 11.099609 L 46.5 10.300781 C 48.4 8.4007812 48.4 5.3003906 46.5 3.4003906 C 45.55 2.4503906 44.300781 1.9746094 43.050781 1.9746094 z M 37.482422 6.0898438 A 1.0001 1.0001 0 0 0 36.794922 6.3925781 L 4.2949219 38.791016 A 1.0001 1.0001 0 0 0 4.0332031 39.242188 L 2.0332031 46.742188 A 1.0001 1.0001 0 0 0 3.2578125 47.966797 L 10.757812 45.966797 A 1.0001 1.0001 0 0 0 11.208984 45.705078 L 43.607422 13.205078 A 1.0001 1.0001 0 1 0 42.191406 11.794922 L 9.9921875 44.09375 L 5.90625 40.007812 L 38.205078 7.8085938 A 1.0001 1.0001 0 0 0 37.482422 6.0898438 z"
                  ></path>
                </svg>
              </button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
