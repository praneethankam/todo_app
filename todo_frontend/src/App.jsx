import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { additemsToServer, deleteitemfromserver } from "./services/talktosrver";
import './index.css'
import { useEffect, useState } from "react";
import { getitemsfromserver } from "./services/talktosrver";
import { markitemcomplete } from './services/talktosrver'

function App() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const loaditems = await getitemsfromserver();
      setTodoItems(loaditems);
    };
    fetchItems();
  }, []);

  const handleNewItem = async (itemName, itemDueDate) => {
    const item = await additemsToServer(itemName, itemDueDate);
    setTodoItems([...todoItems, item]);
  };

  const handleDeleteItem = async (id) => {
    const deleted_id = await deleteitemfromserver(id);
    setTodoItems((prev) => prev.filter((item) => item.id !== deleted_id));
  };
 
  const handlecomplete = async(id) =>{
    const completeditem = await markitemcomplete(id)
    setTodoItems((prev) =>
  prev
    .filter((item) => item.id !== completeditem.id) // remove old item
    .concat(completeditem) // add updated item
);
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex flex-col items-center py-10">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} onComplete={handlecomplete} />
    </div>
  );
}

export default App;