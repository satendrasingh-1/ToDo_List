import { useContext, useState } from "react";
import AddTask from "./component/AddTask";
import ToDoScreen from "./screen/ToDoScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {TaskProvider} from "./context/TaskContext";


const router = createBrowserRouter([
    {
        path:'/',
        element: <ToDoScreen></ToDoScreen>
    },
    {
        path:"/add-task",
        element: <AddTask></AddTask>
    }
])
function App(){

    // const {taskList, addNewTask}=useContext(TaskContext);
    return(
        <TaskProvider>
        <RouterProvider router={router}/>
        </TaskProvider>
    )
}

export default App;