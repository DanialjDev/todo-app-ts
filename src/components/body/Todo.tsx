import React, { useContext, useState } from 'react';
import { Todo, TodoContext } from '../../context/TodoContext';
import { BsTrashFill, BsCheck2 } from 'react-icons/bs';
import { AnimatePresence, motion, Variants } from 'framer-motion';

const TodoItem = ({ todo }: { todo: Todo }) => {
   const { deleteTodo, toggleTodo } = useContext(TodoContext);
   const [show, setShow] = useState(false);
   const variants: Variants = {
      initial: {
         y: '-10vh',
         opacity: 0,
      },
      animate: {
         y: 0,
         opacity: 1,
         transition: {
            type: 'spring',
            mass: 1,
         },
      },
      exit: {
         y: '-10vh',
         opacity: 0,
         transition: {
            type: 'spring',
            mass: 1,
         },
      },
   };
   const deleteTodoHandler = () => {
      setShow(true);
      setTimeout(() => {
         deleteTodo(todo.id);
      }, 500);
   };

   return (
      <AnimatePresence mode='wait'>
         {!show && (
            <motion.div
               variants={variants}
               initial='initial'
               animate='animate'
               exit='exit'
               className={`w-[90%] rounded-md bg-gradient-to-r ${
                  todo.isCompleted
                     ? 'from-green-400 to-green-500 transition-colors duration-1000'
                     : 'from-indigo-400 to-indigo-500 transition-colors duration-1000'
               } p-1`}>
               <div className='w-full h-[120px] bg-white rounded-md flex justify-between items-center flex-col p-1'>
                  <div className='w-full p-2 text-xl'>
                     <p>{todo.text}</p>
                  </div>
                  <div className='w-full flex justify-end pb-1 text-lg'>
                     <BsTrashFill
                        className='mr-2 text-red-500 cursor-pointer'
                        onClick={deleteTodoHandler}
                     />
                     <BsCheck2
                        className='mr-2 text-green-500 cursor-pointer'
                        onClick={() => {
                           toggleTodo(todo.id);
                           console.log(todo);
                        }}
                     />
                  </div>
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
};

export default TodoItem;
