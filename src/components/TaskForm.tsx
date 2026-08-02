import { useState } from "react";
import "./styles/TaskForm.css"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchema } from "../schema/TaskSchema";
import * as z from 'zod'
import type { priority } from "../context/task/TaskReducer";




interface TaskFormProps{
    onAddTask:(x:string, priority:priority)=>void;
}
export function TaskForm({onAddTask}:TaskFormProps){
  const [submissionStatus , setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const { register , handleSubmit , reset ,formState: {errors}} = useForm<z.infer<typeof taskSchema>>(
    {
    resolver: zodResolver(taskSchema),
    defaultValues:{name: '', priority:'medium'}
    }
  )

  const onSubmit =  async (task: {name:string; priority:priority})=>{
    setSubmissionStatus('submitting');
    console.log("onSubmit called", task);
    try{
      await new Promise((resolve , reject)=>
        setTimeout(() => (Math.random() > 0.1 ? resolve(true) : reject(new Error('Failed'))),1500));
      console.log(errors);
      setSubmissionStatus('success');  
      onAddTask(task.name , task.priority);
      reset();
      setSubmissionStatus("idle");
    }
    catch{
      setSubmissionStatus('error');
    }
  }

  return (
    <div className="taskForm">
        <form  name="taskInput" id="taskInput" onSubmit={handleSubmit(onSubmit, (errors) => {console.log("Validation errors:", errors);}) } >
          <label htmlFor='taskInput'>Task input feild</label>
          <input type="text" {...register("name")}/>{
            errors.name && (
              <p>{errors.name.message}</p>
            )
          }
          <select {...register("priority")}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          
          <button type="submit" disabled={submissionStatus==='submitting'} >Submit</button>
          {submissionStatus === 'error' && <p>error occured while subbmiting previous task</p>}
        </form>
        </div>
    )
  }
  //<Button primary="primary" onClick={()=>{onAddTask(text); clearInputField() }} label="submit"></Button>