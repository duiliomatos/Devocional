import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";


function App() {
  
  
  return (
    <div>
      <h1 className="text-red-500">Gerenciador de Tarefas</h1>
      <Tasks/>
      <AddTasks/>
     
    </div>
  );
}

export default App;
