import InputTodo from '../components/InputTodo';
import TodosList from '../components/TodosList';

import { TodosProvider } from '../Context/TodosContext';

const TodosLogic = () => (
  <TodosProvider>
    <InputTodo />
    <TodosList />
  </TodosProvider>
);
export default TodosLogic;
