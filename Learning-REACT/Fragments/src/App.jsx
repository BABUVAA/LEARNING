
function App() {
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk"];
  return  <>
  <h1>Healthy Food (Using map)</h1>
  <ul className="list-group">
      {foodItems.map(item => <li key={item} className="list-group-item">{item}</li>)}
  </ul>
</> 
}

export default App
 