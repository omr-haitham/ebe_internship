import React, { useState } from "react";
import { Button } from "./Button";

interface TaskFormProps{
    onAddTask:(x:string)=>void;
}
export function TaskForm({onAddTask}:TaskFormProps){
    const [text , setText] = useState<string>("");
    const handleInputevent = (e:React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    e.target.value = text;
  };
  const handleSubmitevent = (e:React.SubmitEvent<HTMLInputElement>) => {
    setText(e.target.value);
    e.target.value = text;
  };
  const clearInputField = ()=>{
    setText('');
  }
    return (
        <div>
            <label htmlFor='taskInput'>Task input feild</label>
            <input type="text" name="taskInput" id="taskInput" onBlur={handleInputevent} onSubmit={handleSubmitevent} placeholder={text}></input>
            <Button primary="primary" onClick={()=>{onAddTask(text); clearInputField() }} label="submit"></Button>
        </div>
    )
}