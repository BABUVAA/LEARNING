import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import DeleteTodo from "./component/DeleteTodo";
import DeleteTodo2 from "./component/DeleteTodo2";
import "./App.css";

function App() {
 return <div className='todo-container'>
  <AppName></AppName>
  <AddTodo></AddTodo>
  <div className="items-container">
  <DeleteTodo></DeleteTodo>
  <DeleteTodo2></DeleteTodo2>
  </div>
 </div>
 
}

export default App
