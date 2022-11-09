import { Todo } from './TodoContext';

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

export type Action = AddTodo | DeleteTodo | ClearList | ToggleTodo;
