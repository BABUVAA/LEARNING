import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;

  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }

  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const initialItems = [
    {
      name: "Go to Gym",
      dueDate: "2024-12-12",
    },
    {
      name: "Go to factory",
      dueDate: "2024-12-12",
    },
  ];

  const [todoItems, dispatchTodoItems] = useReducer(
    todoItemsReducer,
    initialItems
  );

  const onNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const handleDelete = (itemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };
  
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: onNewItem,
        deleteItem: handleDelete,
      }}>
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemsContextProvider;
