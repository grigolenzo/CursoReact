import AddTask from "./components/AddTask";
import { useState } from "react";
import Tasks from "./components/Tasks";
AddTask 

function App() {
  const [tasks, setTasks] = useState([
   {
    id: 1,
    title: "Estudar React",
    description: "Ler a documentação do React e fazer exercícios",
    isCompleted: false,
    },
    {
    id: 2,
    title: "Fazer compras",
    description: "Comprar frutas, verduras e leite",
    isCompleted: true,
    },
    {
    id: 3,
    title: "Exercitar-se",
    description: "Fazer uma caminhada de 30 minutos",
    isCompleted: false,
    }
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map(task => { 
      if(task.id === taskId) {
        return{...task, isCompleted: !task.isCompleted}
      }

      return task;
    });

    setTasks(newTasks)
  }

  function onClickDeleteTask (taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  }

  return(
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="textl-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onClickDeleteTask={onClickDeleteTask} />
      </div>
    </div>
  );
}


export default App;