import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import TodoList from './components/body/TodoList';
import TodoHeader from './components/header/TodoHeader';

const App = () => {
   return (
      <div className='max-w-[1600px]'>
         <Toaster position='top-center' />
         <TodoHeader />
         <TodoList />
      </div>
   );
};
export default App;
