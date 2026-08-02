export type action =|{type:"GET_TASK" , id:number}| {type:"ADD_TASK"; payload:string}|{type:"TOGGLE_TASK"; id:number}|{type:"DELETE_TASK"; id:number}
export type task = {label:string, id:number, completed:boolean}
export type state = task[] 

export function TaskReducer (state: state, action :action){
    console.log(state)
    switch(action.type){
        case "ADD_TASK":  return[...state, {label:action.payload , id:Date.now(), completed:false}]
        case "DELETE_TASK": return state.filter(t=>t.id !== action.id)
        case "TOGGLE_TASK": return state.map(t=>t.id === action.id? {...t, completed: !t.completed} : t);
        default: return state; 
    }
    
}
