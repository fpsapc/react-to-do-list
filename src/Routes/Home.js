import Header from '../compontents/Header';
import TodosLogic from '../Logic/TodosLogic';

const Home = () => {
  const a = '';
  return (
    <div className="todos">
      <Header />
      <TodosLogic />
      <p>{a}</p>
    </div>
  );
};
export default Home;
