import {  useReducer } from "react";
import { TasksContext } from "../task/taskContext";
import { type ReactNode } from "react";
import { TaskReducer } from "../task/TaskReducer";

interface TasksProviderProps
{
    children:ReactNode,

}

export function TasksProvider({children}:TasksProviderProps){
    const [tasks , tasksDispatch] = useReducer(TaskReducer , []) 

    return (
        <TasksContext value = {{tasks , tasksDispatch }}> 
            {children} 
        </TasksContext>
    )
}