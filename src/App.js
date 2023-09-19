import React from 'react';
import Header from './components/Header';
import Task from './components/Task';


const App=()=>{
    return (
        <>
        <Header/>
        <div className="task-container">
            <Task title={"Do Eat"}/>
        </div>
        </>
    );    
};

export default App;
