import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import DeleteTodo from "./component/DeleteTodo";
import "./App.css";
import { useState } from "react";

function App() {
  const initialItems = [
    {
      name: "Buy Milk",
      dueDate: "04/10/2024",
    },
    {
      name: "Go to College",
      dueDate: "08/10/2024",
    },
    {
      name: "Buy Car",
      dueDate: "12/12/2024",
    },
  ];

  const [todoItems, setTodoItems] = useState(initialItems);

  const onNewItem = (itemName, itemDueDate) => {
    setTodoItems([...todoItems, { name: itemName, dueDate: itemDueDate }]);
  };

  const handleDelete = (itemName) => {
    setTodoItems(todoItems.filter((item) => item.name != itemName));
  };
  return (
    <div className='todo-container'>
      <AppName />
      <AddTodo handleNewItem={onNewItem} />
      <div className='items-container'>
        {todoItems.map((todoItem) => (
          <DeleteTodo
            key={todoItem.name}
            name={todoItem.name}
            dueDate={todoItem.dueDate}
            onHandleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
