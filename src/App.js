import './App.css';
import Header from './compontents/Header';
import TodosLogic from './Logic/TodosLogic';
function App() {
  return (
    <div className="wrapper">
    <div className="todos">
      <Header />
      <TodosLogic />
    </div>
  </div>
  );
}

export default App;
