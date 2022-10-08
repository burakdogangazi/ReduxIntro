import './App.css';
import Counter from './components/Counter'
import IncreaseCounter from "./components/IncreaseCounter"
import DecreaseCounter from "./components/DecreaseCounter"
import IncreaseByTwoCouter from "./components/IncreaseByTwoCounter"


function App() {
  return (
    <div className="App">
      <Counter/>
      <IncreaseCounter/>
      <DecreaseCounter/>
      <IncreaseByTwoCouter/>
    </div>
  );
}

export default App;
