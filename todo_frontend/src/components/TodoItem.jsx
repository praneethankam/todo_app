function TodoItem({ todoName, todoDate, onDeleteClick, id, onComplete, status }) {
  return (
    <div className="w-full max-w-xl mx-auto mb-3">
      <div className="flex items-center bg-white rounded-lg shadow p-4 hover:shadow-lg transition justify-between">
        {/* Name + Date in a column */}
        <div className="flex flex-col flex-1">
          <span className="text-lg font-medium text-gray-800">{todoName}</span>
          <span className="text-sm text-gray-500">{todoDate}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
          <button
            type="button"
            className={`px-4 py-1 rounded font-semibold transition text-white 
              ${status ? 'bg-green-400 hover:bg-green-500' : 'bg-yellow-500 hover:bg-yellow-600'}`}
            onClick={() => onComplete(id)}
          >
            {status ? 'completed' : 'mark as complete'}
          </button>

          <button
            type="button"
            className="px-4 py-1 rounded bg-red-500 text-white font-semibold hover:bg-red-600 transition"
            onClick={() => onDeleteClick(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
