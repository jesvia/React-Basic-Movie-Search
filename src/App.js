import './App.css';

const Person = (props) =>{
  return(
    <>
    <h1>name: {props.name}</h1>
    <h2>lastname: {props.lastName}</h2>
    <h2>age: {props.age}</h2>
    </>
  )
}
const App = () => {
  return (
    <div className="App">
     <Person 
     name= 'Valkie' 
     lastName = 'Beauty' 
     age = {21}/>
     <Person 
     name = 'Jess'/>
    </div>
  );
}

export default App;
