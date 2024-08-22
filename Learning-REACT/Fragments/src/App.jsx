
function App() {
 // let foodItems =[];
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk"];
  let emptyMessage = foodItems.length === 0 ?<h3>I am still Hungry</h3> :null
  return  <>
  <h1>Healthy Food (Using map)</h1>
    { emptyMessage}
  <ul className="list-group">
      {foodItems.map(item => <li key={item} className="list-group-item">{item}</li>)}
  </ul>
</> 
}

export default App
 