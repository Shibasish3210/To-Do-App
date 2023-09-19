import React from 'react';
import KnowMore from "../assets/know.svg";
import Delete from "../assets/delete.svg";

const Task = ({title,})=>{
    return (
    <div className='Task-card'>
        <input type="checkbox" className="status" />
        <h3 className="task-title">{title}</h3>
        <KnowMore/>
        <Delete/>
    </div>
    );
}

export default Task;
