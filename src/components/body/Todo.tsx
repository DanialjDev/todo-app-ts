import React, { useContext, useEffect, useState } from 'react';
import { Todo, TodoContext } from '../../context/TodoContext';
import { BsTrashFill, BsCheck2All } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { toast } from 'react-hot-toast';

const TodoItem = ({ todo }: { todo: Todo }) => {
   const { deleteTodo, toggleTodo } = useContext(TodoContext);
   const [showTodo, setShowTodo] = useState(false);
   const [showToast, setShowToast] = useState(true);
   const todoVariants: Variants = {
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
   const toastVariants: Variants = {
      initial: {
         y: '-20vh',
      },
      animate: {
         y: 0,
         transition: {
            type: 'spring',
            mass: 1,
         },
      },
      exit: {
         y: '-20vh',
         transition: {
            type: 'spring',
            mass: 1,
         },
      },
   };

   const deleteTodoHandler = () => {
      setShowTodo(true);
      setShowToast(true);
      toast.success(`${todo.text} deleted`);
      setTimeout(() => {
         deleteTodo(todo.id);
         setShowTodo(false);
         console.log('deleted');
      }, 500);
      setTimeout(() => {
         setShowToast(false);
      }, 1500);
   };

   return (
      <AnimatePresence mode='wait'>
         {!showTodo && (
            <motion.div
               variants={todoVariants}
               initial='initial'
               animate='animate'
               exit='exit'
               className={`w-[90%] rounded-md bg-gradient-to-r ${
                  todo.isCompleted
                     ? 'from-green-400 to-green-500 transition-colors duration-1000'
                     : 'from-indigo-400 to-indigo-500 transition-colors duration-1000'
               } p-1 overflow-hidden`}>
               <div
                  className={`w-full h-[120px] overflow-hidden bg-white rounded-md flex justify-between items-center flex-col p-1`}>
                  <div className='w-full p-2 text-xl'>
                     <p>{todo.text}</p>
                  </div>
                  <div className='w-full flex justify-end pb-1 text-lg'>
                     <motion.div whileHover={{ scale: 1.1 }} className='mr-2'>
                        <BsTrashFill
                           className='text-red-500 cursor-pointer hover:text-red-600'
                           onClick={deleteTodoHandler}
                        />
                     </motion.div>
                     <motion.div className='mr-2' whileHover={{ scale: 1.2 }}>
                        <BsCheck2All
                           className='text-green-500 cursor-pointer hover:text-green-600'
                           onClick={() => {
                              toggleTodo(todo.id);
                           }}
                        />
                     </motion.div>
                  </div>
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
};

export default TodoItem;
