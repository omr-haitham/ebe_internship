import { createContext , type Dispatch } from "react";
import { type state, type action } from "./TaskReducer";

type TasksContextType = {
    tasks: state;
    tasksDispatch: Dispatch<action>;
};

export const TasksContext = createContext <TasksContextType|null>(null);