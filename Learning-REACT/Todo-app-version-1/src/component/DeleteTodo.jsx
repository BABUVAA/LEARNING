import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { TodoItemsContext } from "../store/todo-items-store";
function DeleteTodo() {
  const todoContext = useContext(TodoItemsContext);
  const handleDelete = todoContext.deleteItem;
  const todoItems = todoContext.todoItems;

  return (
    <>
      {todoItems.map((item) => (
        <div className='container' key={item.name}>
          <div className='row b-row'>
            <div className='col-6'>{item.name}</div>
            <div className='col-4'>{item.dueDate}</div>
            <div className='col-2'>
              <button
                type='button'
                className='btn btn-danger b-button'
                onClick={() => handleDelete(item.name)}>
                <AiFillDelete />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default DeleteTodo;
