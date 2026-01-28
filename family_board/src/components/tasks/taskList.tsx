import Task from "@/interfaces/task";

type TasksListProps = {
    tasks: Task;
    deleteTask: (taskId: number) => Promise<void>;
}

const TasksList = ( { tasks, deleteTask }: TasksListProps) => {
    return (
        <div>
            <h2>Tasks List</h2>
            <ul>
                {tasks.items.map((item) => (
                    <div>
                        <li key={item.id}>{item.task}</li>
                        <button onClick={() => deleteTask(item.id)}>Delete</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default TasksList;