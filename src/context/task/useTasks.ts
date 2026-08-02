import { useContext } from "react";
import { TasksContext } from "./taskContext";

export function useTasks() {
    const context = useContext(TasksContext);

    if (!context) {
        throw new Error("useTasks must be used inside a TasksProvider");
    }

    return context;
}