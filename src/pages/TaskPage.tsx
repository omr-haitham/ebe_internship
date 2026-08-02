import { useParams } from "react-router-dom"

import { TaskCard } from "../components/TaskCard";

import { useTasks } from "../context/task/useTasks";

export function TaskPage(){
    console.log()
    const {taskId} = useParams<{taskId : string}>();
    const {tasks , tasksDispatch} = useTasks();
    const task= tasks.find(t=> t.id === parseInt(taskId !== undefined? taskId : "" ));
    
 return (
    <div>

        {task !== undefined && task !== null ? 
        <TaskCard text={task.label} 
        completed={task.completed} 
        onDelete={()=>tasksDispatch({type:"DELETE_TASK",id:task.id})} 
        onToggle={()=>tasksDispatch({type:"TOGGLE_TASK",id:task.id})}/> 
        : 
        <h1>no task found</h1>}
    </div>
 )
}