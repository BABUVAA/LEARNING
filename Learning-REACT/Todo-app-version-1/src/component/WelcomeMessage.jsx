import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function WelcomeMessage() {
  const todoContext = useContext(TodoItemsContext);
  const todoItems = todoContext.todoItems;
  return (
    <>
      {todoItems.length == 0 && (
        <center>
          <h1>Enjoy yor Day</h1>
          <h2>No task is  Pending</h2>
        </center>
      )}
    </>
  );
}
export default WelcomeMessage;
