import React from 'react';

const Header = ()=>{
    return (
        <div className='Header'>
        <h1 className='heading'>To-Do App</h1>
        <div className="inp-fields">
            <label htmlFor="task-heading">Task Heading : </label>
            <input type="text" id='task-heading' placeholder='Enter Task Heading'/>
        </div>
        <div className="inp-fields">
            <label htmlFor="task-description">Task Description : </label>
            <input type="text" id='task-description' placeholder='Enter Task Details'/>
        </div>
        <button className='btn'>Add Task</button>
        </div>
    );
}

export default Header;
