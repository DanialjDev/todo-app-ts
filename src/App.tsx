import { AnimatePresence } from 'framer-motion';
import TodoList from './components/body/TodoList';
import TodoHeader from './components/header/TodoHeader';

const App = () => {
   return (
      // <AnimatePresence mode='wait'>
      <div className=''>
         <TodoHeader />
         <TodoList />
      </div>
      // </AnimatePresence>
   );
};
export default App;
