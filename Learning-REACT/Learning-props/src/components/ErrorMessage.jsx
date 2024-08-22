
const ErrorMessage = (props) => {
  let zooAnimal = [];
  //let zooAnimal =["Lion", "Cheeta", "Giraffe", "Elephant", "Fox", "Zebra"];
  let emptyMessage = props.fetch.length === 0 && <h3>Zoo is empty</h3>;
  return <>
      <h3>{emptyMessage}</h3>
  </>
};
export default ErrorMessage;