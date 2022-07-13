import React, { useState } from "react";

import Tasks from "./components/Tasks";

import './App.css';
const App = () => {
    // let message = "hello world";
    const [tarefas, setTarefas] = useState([
        {
            id: '1',
            title: 'Estudar Programação',
            completed: false,
        },
        {
            id: '2',
            title: 'Estudar Inglês',
            completed: false,
        }
    ])

    return (
    <div>
        <div className="container">
        <Tasks />
        </div>
       
    </div>
 )};

export default App;


