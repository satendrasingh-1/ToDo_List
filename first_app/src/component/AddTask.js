import { useContext,useState } from "react";
import React from 'react';
import TaskContext from "../context/TaskContext";
import {useNavigate } from "react-router-dom";

function AddTask(){

    const {addNewTask} = useContext(TaskContext); 

    const navigate= useNavigate();


    const [task, setTask] = useState({
        title:"",
        description:"",
    });


    let handelInputChange = (e)=>{
        setTask({
            ...task, 
            [e.target.name]: e.target.value
        });
    }

    let onFormSubmit=(e)=>{
        e.preventDefault();
        console.log(task);
        addNewTask(task);
        setTask({});
        navigate("/");
    }

    return(
        <section className="screen">
            
            <h3 className="center">Add New Task</h3>
            <div className="ui form">
                <form onSubmit={onFormSubmit}>
                    <div className="field">
                        <label>Title</label>
                        <input type="text" 
                            spellCheck={false}
                            data-ms-editor={true}
                            placeholder="Task title" 
                            name="title"
                            onChange={handelInputChange}
                            value = {task.title}
                        />
                    </div>
                    <div className="field">
                        <label>Description</label>
                        <textarea rows="2" 
                            spellCheck={false}
                            data-ms-editor={true}
                            placeholder="Description" 
                            name="description"
                            onChange={handelInputChange}
                            value = {task.description}
                        />
                    </div>
                    <button type="submit" 
                    className="ui primary button" >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    )
}


export default AddTask;

