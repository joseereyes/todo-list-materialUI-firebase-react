import './App.css';
import NavBar from './main.layouts/navbar';
import MainContent from './main.layouts/main.content';
import { TaskContextProvider } from "./modules/tasks/tasks.context.jsx";

function App() {

  return (
    <TaskContextProvider>
      < NavBar />
      <MainContent />
    </TaskContextProvider>
  );
}
export default App;