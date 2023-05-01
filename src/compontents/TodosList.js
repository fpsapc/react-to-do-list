import React from 'react'
import TodoItem from './TodoItem'

const TodosList = ({ todosProps, handleChange }) => {
        return (
          <ul>
            {todosProps.map((todo) => (
              <TodoItem key={todo.id} itemProp={todo} handleChange={handleChange}
              />
            ))}
          </ul>
        );
      };

export default TodosList

  