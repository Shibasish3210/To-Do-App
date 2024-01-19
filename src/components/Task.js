import React,{useState} from 'react';
// import KnowMore from "../assets/know.svg";
// import Delete from "../assets/delete.svg";

const Task = ({title,description,taskDetails,setTaskDetails,id})=>{
    const [completed, setCompleted] = useState(false);
    const [expanded, setExpanded] = useState(false);

    function toggleCass(e) {
        if(e.target.checked){
            setCompleted(true);
        }else{
            setCompleted(false);
        }
    }

    function deleteTask() {
        setTaskDetails(taskDetails.filter((task)=>{
            return task.id !== id;
        }))
    }

    function handleExpansion() {
        console.log("click");
        if(expanded){
            setExpanded(false);
        }else{
            setExpanded(true);
        }
    }

    return (
    <div className={completed ? 'Task-wrapper done' : 'Task-wrapper'}>
    <div className='Task-card'>
        <input className='status' type="checkbox" onClick={e=>toggleCass(e)}/>
        <h3 className="task-title">{title}</h3>
        <img onClick={handleExpansion} width="18" height="18" src="https://img.icons8.com/windows/32/info.png" alt="info"/>
        <img onClick={deleteTask} className='delete' width="35" height="35" src="https://img.icons8.com/carbon-copy/100/filled-trash.png" alt="filled-trash"/>
    </div>
    <div className="extra">
        <p className={expanded ? 'noClass' : 'extra-info'}>
            {description}
        </p>
    </div>
    </div>
    );
}

export default Task;
