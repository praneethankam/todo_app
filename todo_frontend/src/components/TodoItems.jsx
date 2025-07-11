import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteClick,onComplete }) => {
  return (
    <div className="flex flex-col items-center w-full">
      {todoItems.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          status={item.completed}
          todoDate={item.itemDueDate}
          todoName={item.itemName}
          onDeleteClick={onDeleteClick}
          onComplete={onComplete}
        />
      ))}
    </div>
  );
};

export default TodoItems;