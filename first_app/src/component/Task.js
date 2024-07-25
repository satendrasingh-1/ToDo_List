import { useContext, useState } from "react";
import { formatDate } from "../utils/DateUtil";
import TaskContext from "../context/TaskContext";


const Task = ({task: incomingTask})=>{
    const {title, description, create_date, taskId} = incomingTask;
    const [isEditing, setIsEditing] = useState(false);
    const  [task, setTask] = useState(incomingTask);
    const {deleteTask, editTask }= useContext(TaskContext);

    let handelInputChange = (e)=>{
        setTask({
            ...task, 
            [e.target.name]: e.target.value
        });
    }

    if(isEditing){

        return (
            <div className="card">
                <div className="content">
                    <div className="ui form">
                        <div className="field">
                                <input type="text" 
                                    spellCheck={false}
                                    data-ms-editor={true}
                                    placeholder="Task Title" 
                                    name="title"
                                    onChange={handelInputChange}
                                    value = {task.title}
                                />
                        </div>
                    
                        <div className="meta">
                            {formatDate(create_date)}
                        </div>
                    
                        <div className="field">
                            <textarea rows="2" 
                                spellCheck={false}
                                data-ms-editor={true}
                                placeholder="Description" 
                                name="description"
                                onChange={handelInputChange}
                                value = {task.description}
                            />
                        </div>
                    </div>
                </div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic green button"
                            onClick={()=>{
                                editTask(task);
                                setIsEditing(false);
                            } }
                        >
                            Save
                        </div>
                        <div className="ui basic red button" 
                            onClick={()=>setIsEditing(false)}>
                            Cancle
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else{
        return (
            <div className="card">
                <div className="content">
                    <div className="header">
                        {title}
                    </div>
                    <div className="meta">
                        {formatDate(create_date)}
                    </div>
                    <div className="description">
                        {description}
                    </div>
                </div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic green button"
                            onClick={()=>setIsEditing(true)} 
                        >
                            Edit
                        </div>
                        <div className="ui basic red button" 
                            onClick={()=>deleteTask(taskId)}>
                            Delete
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Task;