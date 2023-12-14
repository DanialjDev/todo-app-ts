import React, { useContext, useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { TodoContext } from "../../context/TodoContext";
import toast from "react-hot-toast";

const Button = ({
  text,
  onClick,
  type,
  margin,
}: {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit";
  margin?: string;
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-gradient-to-r from-indigo-400 to-indigo-500 px-3 py-2 rounded-md mx-4 text-white ${
        margin ? margin : ""
      }`}
    >
      {text}
    </button>
  );
};

const TodoHeader = () => {
  const [todo, setTodo] = useState("");
  const [animate, setAnimate] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { clearList, addTodo, todos } = useContext(TodoContext);
  const variants: Variants = {
    initial: {
      y: "-20vh",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.5,
        mass: 1.4,
      },
    },
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const addTodoHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo) {
      const newTodo = {
        text: todo,
        id: Math.floor(Math.random() * 1000),
        isCompleted: false,
      };
      toast.success("Todo added!");
      addTodo(newTodo);
      setTodo("");
    } else {
      setAnimate("animate-float !border-red-400");
      toast.error("please add a todo");
      setTimeout(() => {
        setAnimate("");
      }, 1100);
    }
    inputRef.current?.focus();
  };

  return (
    <form
      className="w-full h-44 flex justify-center items-center mt-14"
      onSubmit={addTodoHandler}
    >
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        className="lg:w-[60%] w-[85%] flex justify-center items-center border-4 border-indigo-500 rounded-lg overflow-hidden"
      >
        <div className="w-[98.7%] bg-white rounded-md overflow-hidden flex flex-col md:flex-row justify-between items-center py-4 px-2">
          <div className="w-full md:w-[50%] h-[60%] md:m-0 mt-3">
            <input
              ref={inputRef}
              value={todo}
              onChange={(e) => {
                setTodo(e.target.value);
                setAnimate("");
              }}
              type="text"
              className={`w-full h-full border-l-[3px] border-indigo-400 outline-none pl-1 ${
                todo ? "" : animate
              }`}
              placeholder="Add Todo..."
            />
          </div>
          <div className="h-full flex flex-col sm:flex-row items-center md:m-0 mt-3">
            <Button type="submit" text="Add Todo" />
            <Button
              onClick={() => clearList()}
              text="Clear List"
              margin="sm:m-0 mt-3"
            />
          </div>
        </div>
      </motion.div>
    </form>
  );
};

export default TodoHeader;
