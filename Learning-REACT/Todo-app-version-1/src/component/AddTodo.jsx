import { useContext, useRef, useState } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const todoContext = useContext(TodoItemsContext);
  const handleNew = todoContext.addNewItem;

  const todoDate = useRef();
  const todoName = useRef();

  // State for error messages
  const [error, setError] = useState("");

  const handleButtonClick = (event) => {
    event.preventDefault();

    // Check if either input is empty
    if (!todoName.current.value || !todoDate.current.value) {
      setError("Please fill both fields");
      return;
    }
    handleNew(todoName.current.value, todoDate.current.value);
    setError("");
    todoDate.current.value = "";
    todoName.current.value = "";
  };

  const handleInputChange = () => {
    if (error) {
      setError("");
    }
  };

  return (
    <form className='container' onSubmit={handleButtonClick}>
      <div className='row b-row'>
        <div className='col-6'>
          <input
            type='text'
            ref={todoName}
            onChange={handleInputChange}
            placeholder='Enter TODO Here'></input>
        </div>

        <div className='col-4'>
          <input
            type='date'
            onChange={handleInputChange}
            ref={todoDate}></input>
        </div>

        <div className='col-2'>
          <button className='btn btn-success b-button'>
            <BiMessageAdd />
          </button>
        </div>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
export default AddTodo;
