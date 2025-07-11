import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => setTodoName(event.target.value);
  const handleDateChange = (event) => setDueDate(event.target.value);

  const handleAddButtonClicked = () => {
    if (!todoName.trim() || !dueDate) return;
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="w-full flex flex-col items-center mb-6">
      <div className="flex w-full max-w-xl gap-3">
        <input
          type="text"
          placeholder="Enter Todo Here"
          value={todoName}
          onChange={handleNameChange}
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none text-gray-700 bg-white shadow"
        />
        <input
          type="date"
          value={dueDate}
          onChange={handleDateChange}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none text-gray-700 bg-white shadow"
        />
        <button
          type="button"
          className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 shadow transition"
          onClick={handleAddButtonClicked}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;