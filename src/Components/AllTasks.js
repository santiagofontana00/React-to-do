import React, { useState } from 'react';
import Task from './Task';

function AllTasks() {
    const [tasks, setTasks] = useState(["This is a task inside ALLTASKS","Task 2","Task 3"])

    const addTask = event => {
       

        let newTask = event.target.newTask.value
        
        setTasks([
            ...tasks,
            newTask
        ])

        event.target.newTask.value=''
      
    }

    const deleteTask = taskToDelete => {
        setTasks(tasks.filter(task=> task != taskToDelete))
    }

    const handleSubmit = event => {
        event.preventDefault();
        addTask(event)
      }

    return (
        <div>
            <h2>All Tasks</h2>
           
            <ul>
                {
                    tasks.map((task, i) =><Task text={task} keyCode={i + task} deleteToDo = {deleteTask} /> )
                }

            </ul>

            <form onSubmit={handleSubmit}>
                <input name='newTask' type="text"/><br />
                <button >Add Task</button>
            </form>
        </div>
    );
}

export default AllTasks;
