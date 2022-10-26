import { createContext, ReactNode, useReducer } from 'react';
import todoReducer from './reducer';

export interface InitialState {
   todos: Todo[];
   addTodo: (todo: Todo) => void;
   deleteTodo: (id: number) => void;
   clearList: () => void;
}

export interface Todo {
   text: string;
   id: number;
   isCompleted: boolean;
}

const initialState: InitialState = {
   todos: [],
   addTodo: (todo) => {},
   deleteTodo: (id) => {},
   clearList: () => {},
};

export const TodoContext = createContext<InitialState>(initialState);

export const TodoContextProvider = ({ children }: { children: ReactNode }) => {
   const [todoState, dispatch] = useReducer(todoReducer, initialState);

   const value: InitialState = {
      todos: todoState.todos,
      addTodo: (todo: Todo) => dispatch({ type: 'add-todo', payload: todo }),
      deleteTodo: (id: number) =>
         dispatch({ type: 'delete-todo', payload: id }),
      clearList: () => dispatch({ type: 'clear-list' }),
   };

   return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
