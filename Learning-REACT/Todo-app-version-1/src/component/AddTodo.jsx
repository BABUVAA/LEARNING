function AddTodo(){
return <div className="container">
<div class="row b-row">
<div class="col-6">
  <input type="text" placeholder="Enter TODO Here"></input>
</div>
<div class="col-4">
  <input type="date"></input>
</div>
<div class="col-2">
  <button type="button" class="btn btn-success b-button">Add</button>
</div>
</div>
</div>
}
export default AddTodo