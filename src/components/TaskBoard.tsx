
import { TaskForm } from "./TaskForm";
import { Link, Outlet } from "react-router-dom";

import "./styles/TaskBoard.css" 
import { useTasks } from "../context/task/useTasks";

export function TaskBoard(){
    
    const {tasks , tasksDispatch} = useTasks();
    const onAddTask = (text:string)=>{tasksDispatch({type:"ADD_TASK", payload:{name:text}});}

    
    return(
        <div className="taskBoard">
            <div className="title">TaskBoard</div>
            <TaskForm onAddTask={onAddTask}></TaskForm>
            <ul>
                {tasks.map((task)=>(<li ><Link to={`/tasks/${task.id}`} state={tasks} >task: {task.label}</Link></li>))}
            </ul>
            <Outlet/>
        </div>
    )
}