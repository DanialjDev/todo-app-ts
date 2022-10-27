import type { InitialState, Todo } from './TodoContext';

interface AddTodo {
   type: 'add-todo';
   payload: Todo;
}
interface ToggleTodo {
   type: 'toggle-todo';
   payload: number;
}
interface DeleteTodo {
   type: 'delete-todo';
   payload: number;
}
interface ClearList {
   type: 'clear-list';
}

type Action = AddTodo | DeleteTodo | ClearList | ToggleTodo;

const todoReducer = (state: InitialState, action: Action): InitialState => {
   switch (action.type) {
      case 'add-todo':
         return {
            ...state,
            todos: [...state.todos, action.payload],
         };
      case 'delete-todo':
         return {
            ...state,
            todos: state.todos.filter((todo) => todo.id !== action.payload),
         };
      case 'toggle-todo':
         return {
            ...state,
            todos: state.todos.map((todo) =>
               todo.id === action.payload
                  ? {
                       ...todo,
                       isCompleted: !todo.isCompleted,
                    }
                  : todo
            ),
         };
      case 'clear-list':
         return {
            ...state,
            todos: [],
         };
      default:
         return state;
   }
};

export default todoReducer;
