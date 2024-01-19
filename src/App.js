import React, {useState,useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Task from './components/Task';

const LOCAL_SORAGE_KEY = 'TASKS';
let input1, input2;
let prevData;
const App=()=>{
    const [taskDetails, setTaskDetails] = useState([]);
    const[currTask, setCurrTask] = useState({
        title: '',
        desc : '',
        id : '',
        checked: false,
        expanded : false
    });
    
    
    prevData = JSON.parse(localStorage.getItem(LOCAL_SORAGE_KEY));
    useEffect(()=>{
        if(prevData){
            setTaskDetails(prevData);
        }
        
    },[])
    function addCurrTask() {
        if(!input1 || !input2 || input1.value === '' || input2.value === ''){
            alert("Please Enter Both Fields");
            return;
        }

        for (let i = 0; i < taskDetails.length; i++) {
            if(taskDetails[i].id === currTask.id){
                return;
            }
            
        }
        
        setTaskDetails([...taskDetails,currTask]);
        input1.value = '';
        input2.value = '';
        
    }
    localStorage.setItem(LOCAL_SORAGE_KEY,JSON.stringify([...taskDetails]));

    function addTaskTitle(e) {
        e.target.value && setCurrTask({...currTask,title:e.target.value,id:uuidv4()});
        input1 = e.target;
    }
    
    function addTaskDesc(e) {
        e.target.value && setCurrTask({...currTask,desc:e.target.value});
        input2 = e.target;
    }

    return (
        <>
        <div className='Header'>
            <h1 className='heading'>To-Do App</h1>
            <div className="inp-fields">
                <label htmlFor="task-heading">Task Heading : </label>
                <input type="text" id='task-heading' placeholder='Enter Task Heading' onBlur={e=>addTaskTitle(e)} />
            </div>
            <div className="inp-fields">
                <label htmlFor="task-description">Task Description : </label>
                <input type="text" id='task-description' placeholder='Enter Task Details' onBlur={e=>addTaskDesc(e)} />
            </div>
            <button className='btn' onClick={addCurrTask}>Add Task</button>
        </div>

        <div className="task-container">
            {
                taskDetails.length >=1 &&
                taskDetails.map((tasks)=>{
                    return <Task key={tasks.id} title={tasks.title} description={tasks.desc} taskDetails={taskDetails} setTaskDetails={setTaskDetails} id={tasks.id}/>
                })
            }
        </div>
        </>
    );    
};

export default App;
