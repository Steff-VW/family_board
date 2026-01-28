import Header from "@/components/header/header";
import TasksList from "@/components/tasks/taskList";
import TaskPicker from "@/components/tasks/taskPicker";
import Task from "@/interfaces/task";
import { useState, useEffect } from "react";


const TasksPage = () => {

      const [tasks, setTasks] = useState<Task>({ items: [], message: "" });
      const [open, setOpen] = useState(false);
      const [inputs, setInputs] = useState([""]);
      const [error, setError] = useState<string | null>(null);

      useEffect(() => {
        getTasks()
      }, []);
  
  const toggleOpen = () => {
          if(open) {
              setOpen(false);
          } else {
              setOpen(true);
          }
      }
  
      const handleClick = () => {
          setInputs([...inputs, ""]);
      }
  
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
          const newInputs = [...inputs];
          newInputs[index] = e.target.value;
          setInputs(newInputs);
      }
  
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          const currentInputs = [...inputs];
          await addTasks(currentInputs); 
          await getTasks();              
          setInputs([""]);
          setOpen(false);
      };
  
      const getTasks = async () => {
          try {
              const response = await fetch("https://localhost:7279/Task/items", {
                  method: "GET",
              });
              if (!response.ok) {
                  throw new Error(await response.text());
              }
              const data: Task = await response.json();
              setTasks(data);
          } catch (error: any) {
              setError(error.message || "An unexpected error occurred while fetching tasks.");
          }
      }
  
      const addTasks = async (tasks: string[]) => {
          try {
              const taskObjects = tasks.map(task => ({ task: task, isCompleted: false }));
              const response = await fetch("https://localhost:7279/Task/add", {
              method: "POST",
              headers: {
              "Content-Type": "application/json"
              },
              credentials: "include",
              body: JSON.stringify(taskObjects)
              })
              if (!response.ok) {
                  throw new Error(await response.text());
              }
          } catch (error: any) {
              setError(error.message || "An unexpected error occurred while adding tasks.");
          }
      }
  
      const deleteTask = async (taskId: number) => {
          try {
              const response = await fetch(`https://localhost:7279/Task/remove/${taskId}`, {
                  method: "DELETE",
              });
              if (!response.ok) {
                  throw new Error(await response.text());
              }
              await getTasks();
          } catch (error: any) {
              setError(error.message || "An unexpected error occurred while deleting the task.");
          }
      }
  
  return (
    <div>
        <div>
            <Header />
        </div>
        <div>
            <TasksList tasks={tasks} deleteTask={deleteTask} />
        </div>
        <div>
             <TaskPicker 
                toggleOpen={toggleOpen}
                open={open}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                handleClick={handleClick}
                inputs={inputs}
             />
        </div>
    </div>
  );
}

export default TasksPage;  