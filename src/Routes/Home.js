import Header from '../compontents/Header';
import TodosLogic from '../Logic/TodosLogic';

const Home = () => {
  return (
    
      <div className="todos">
        <Header />
        <TodosLogic />
      </div>
  );
};
export default Home;