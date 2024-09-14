import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import DeleteTodo from "./component/DeleteTodo";
import "./App.css";
import WelcomeMessage from "./component/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <div className='todo-container'>
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <DeleteTodo />
      </div>
    </TodoItemsContextProvider>
  );
}

export default App;
