import {useContext} from "react";
import Task from "../component/Task";
import TaskContext from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

function ToDoScreen(){
    const {taskList}= useContext(TaskContext);

    const navigate = useNavigate();

    return(
        <>
            <div className="screen">
                <h1 className="ui heading center">To Do List</h1>
                <div onClick={(e)=>{
                    navigate("add-task");
                }}
                className="ui secondary button">
                    Add Task
                </div>
                <section>
                    <div className="ui cards">
                        {taskList.map((task) => (
                            <Task task={task} key={task.taskId}/>
                            ))}
                    </div>
                </section>
                {/* <AddTask onSubmit = {addNewTask}/>  */}
            </div>
            
        </>
    );
}
export default ToDoScreen;