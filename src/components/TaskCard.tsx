import { Button } from "./Button"

interface TaskCardProps{
    text : string,
    completed : boolean,
    onToggle: ()=>void,
    onDelete:()=>void
}
export function TaskCard({text, completed, onToggle , onDelete}: TaskCardProps){
    return(
        <div>    
            {completed ? <s>{text} ✅</s> : <p>{text} ❎</p>}
            <div>
                <Button label="delete" onClick={onDelete}></Button>
                <Button label="toggle" onClick={onToggle}></Button>
            </div>
        </div>
    )
}