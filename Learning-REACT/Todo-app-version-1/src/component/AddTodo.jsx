import { useState } from "react";

function AddTodo({ handleNewItem }) {
  const [todoName, setTodoName] = useState();
  const [todoDate, setTodoDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };
  const handleButtonClick = () => {
    handleNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div className='container'>
      <div class='row b-row'>
        <div class='col-6'>
          <input
            type='text'
            value={todoName}
            placeholder='Enter TODO Here'
            onChange={handleNameChange}></input>
        </div>
        <div class='col-4'>
          <input
            type='date'
            value={todoDate}
            onChange={handleDateChange}></input>
        </div>
        <div class='col-2'>
          <button
            type='button'
            class='btn btn-success b-button'
            onClick={handleButtonClick}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
