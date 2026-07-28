import { useReducer } from "react";
import { TaskReducer } from "../context/TaskReducer";
import { TaskForm } from "./TaskForm";
import { TaskCard } from "./TaskCard";
import "./styles/TaskBoard.css" 

export function TaskBoard(){
    const [ tasks , TaskDispatch ] = useReducer(TaskReducer,[]);
    const onAddTask = (text:string)=>TaskDispatch({type:"ADD_TASK", payload:text})
    return(
        <div className="taskBoard">
            <div className="title">TaskBoard</div>
            <TaskForm onAddTask={onAddTask}></TaskForm>
            <ul>
                {tasks.map((task)=>(<li ><TaskCard text={task.label} completed={task.completed} onDelete={()=>TaskDispatch({type:"DELETE_TASK",id:task.id})} onToggle={()=>TaskDispatch({type:"TOGGLE_TASK",id:task.id})}/></li>))}
            </ul>
        </div>
    )
}