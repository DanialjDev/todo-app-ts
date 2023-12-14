import { Toaster } from "react-hot-toast";
import TodoList from "./components/body/TodoList";
import TodoHeader from "./components/header/TodoHeader";

const App = () => {
  return (
    <div className="max-w-[1800px] m-auto">
      <Toaster position="top-center" />
      <TodoHeader />
      <TodoList />
    </div>
  );
};
export default App;
