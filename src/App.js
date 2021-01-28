// import logo from './logo.svg';
import './App.css';
// import Header from './challengesDay1'
import NameProp from './ components/NameProp';
//this is how you mount a component


function App() {
  return (
    <div className="App">
       <h1>Welcome to React</h1>
      <h2>We just modified our root App component</h2>
      <Header /> 
      <NameProp /> 
    </div>
  );
}

export default App;
