import React, { useContext, useEffect, useRef, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { TodoContext } from '../../context/TodoContext';

const Button = ({ text, onClick }: { text: string; onClick?: () => void }) => {
   return (
      <button
         onClick={onClick}
         className='bg-gradient-to-r from-indigo-400 to-indigo-500 px-3 py-2 rounded-md mx-4 text-white'>
         {text}
      </button>
   );
};

const TodoHeader = () => {
   const [todo, setTodo] = useState('');
   const [animate, setAnimate] = useState('');
   const inputRef = useRef<HTMLInputElement | null>(null);
   const { addTodo, todos } = useContext(TodoContext);
   const variants: Variants = {
      initial: {
         y: '-20vh',
         opacity: 0,
      },
      animate: {
         y: 0,
         opacity: 1,
         transition: {
            type: 'spring',
            duration: 0.5,
            mass: 1.4,
         },
      },
   };

   useEffect(() => {
      inputRef.current?.focus();
   }, []);

   const addTodoHandler = () => {
      if (todo) {
         const newTodo = {
            text: todo,
            id: Math.floor(Math.random() * 1000),
            isCompleted: false,
         };
         addTodo(newTodo);
         inputRef.current?.focus();
         setTodo('');
         console.log(todos);
      } else {
         setAnimate('animate-float !border-red-400');
         setTimeout(() => {
            setAnimate('');
         }, 1100);
      }
   };

   return (
      <div className='w-full h-44 flex justify-center items-center'>
         <motion.div
            variants={variants}
            initial='initial'
            animate='animate'
            className='w-[50%] h-[40%] flex justify-center items-center bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-lg overflow-hidden'>
            <div className='w-[98.5%] h-[88%] bg-white rounded-md overflow-hidden flex justify-between items-center px-2'>
               <div className='w-[250px] h-[60%]'>
                  <input
                     ref={inputRef}
                     value={todo}
                     onChange={(e) => {
                        setTodo(e.target.value);
                        setAnimate('');
                     }}
                     type='text'
                     className={`w-full h-full border-l-[3px] border-indigo-400 outline-none pl-1 ${
                        todo ? '' : animate
                     }`}
                     placeholder='Add Todo...'
                  />
               </div>
               <div className='h-full flex items-center'>
                  <Button onClick={addTodoHandler} text='Add Todo' />
                  <Button text='Clear List' />
               </div>
            </div>
         </motion.div>
      </div>
   );
};

export default TodoHeader;
