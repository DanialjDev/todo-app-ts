import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import TodoItem from "./Todo";

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div className="w-full h-auto mt-10 flex justify-center items-center">
      <div className="lg:w-[60%] md:w-[80%] w-full h-full grid gap-x-3 gap-y-8 justify-items-center grid-cols-3 grid-rows-3">
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
