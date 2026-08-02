import { Dashboard } from "../components/Dashboard";
import { TaskBoard } from "../components/TaskBoard";
import { UserCard } from "../components/UserCard";

export function HomePage(){
   return(
       <Dashboard>

       <UserCard name='jane doe' occupation='dentist'/> 
       <TaskBoard/> 
       </Dashboard>
    ) 
}