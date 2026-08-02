import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { AboutPage } from "../pages/About";
import { HomePage } from "../pages/HomePage"
import { TaskPage } from "../pages/TaskPage";

export const router = createBrowserRouter([
    {
        path:"", element:<App/>,
        children:[
            {path:'home', element:<HomePage/>},
            {path:'about', element:<AboutPage/>},
            {path:'tasks/:taskId', element:<TaskPage />}
        ]        
    }
])