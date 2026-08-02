export type action =| {type:"ADD_TASK"; payload:{name:string; priority?:priority}}|{type:"TOGGLE_TASK"; id:number}|{type:"DELETE_TASK"; id:number}
export type task = {label:string, id:number, completed:boolean , priority:'low'|'medium'|'high'}
export type state = task[] 
export type priority = 'low'|'medium'|'high'

export function TaskReducer (state: state, action :action){
    console.log(state)
    switch(action.type){
        case "ADD_TASK":  return[...state, {label:action.payload.name , id:Date.now(), completed:false , priority:action.payload.priority !== undefined? action.payload.priority : 'medium'}]
        case "DELETE_TASK": return state.filter(t=>t.id !== action.id)
        case "TOGGLE_TASK": return state.map(t=>t.id === action.id? {...t, completed: !t.completed} : t);
        default: return state; 
    }
    
}
