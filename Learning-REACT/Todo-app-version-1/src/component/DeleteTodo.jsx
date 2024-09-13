import { AiFillDelete } from "react-icons/ai";
function DeleteTodo({ name, dueDate, onHandleDelete }) {
  return (
    <div className='container'>
      <div className='row b-row'>
        <div className='col-6'>{name}</div>
        <div className='col-4'>{dueDate}</div>
        <div className='col-2'>
          <button
            type='button'
            className='btn btn-danger b-button'
            onClick={() => onHandleDelete(name)}>
            <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
export default DeleteTodo;
