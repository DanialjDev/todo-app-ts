import React, { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import TodoItem from './Todo';

const TodoList = () => {
   const { todos } = useContext(TodoContext);
   return (
      <div className='w-full h-[60vh] mt-10 flex justify-center items-center'>
         <div className='w-[60%] h-full grid gap-3 justify-items-center grid-cols-3 grid-rows-3'>
            {todos.map((todo) => (
               <TodoItem todo={todo} key={todo.id} />
            ))}
         </div>
      </div>
   );
};

export default TodoList;
