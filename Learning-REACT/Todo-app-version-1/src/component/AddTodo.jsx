import { useState } from "react";
import { BiMessageAdd } from "react-icons/bi";


function AddTodo({ handleNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

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
      <div className='row b-row'>
        <div className='col-6'>
          <input
            type='text'
            value={todoName}
            placeholder='Enter TODO Here'
            onChange={handleNameChange}></input>
        </div>
        <div className='col-4'>
          <input
            type='date'
            value={todoDate}
            onChange={handleDateChange}></input>
        </div>
        <div className='col-2'>
          <button
            type='button'
            className='btn btn-success b-button'
            onClick={handleButtonClick}>
             <BiMessageAdd/>
          </button>
        
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
