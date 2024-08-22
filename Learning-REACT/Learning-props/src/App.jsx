import ErrorMessage from './components/ErrorMessage';
import Heading from './components/Heading'
import ZooAnimal from './components/ZooAnimal';
function App() {
//let zooAnimal=[];
let zooAnimal =["Lion", "Cheeta", "Giraffe", "Elephant", "Fox", "Zebra","Tiger"];
  return (
    <>
      <Heading/>
      {zooAnimal.map(animal => <ZooAnimal props={animal} /> )}
      <ErrorMessage fetch={zooAnimal}/>
    </>
  )
}

export default App
