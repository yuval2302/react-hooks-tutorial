import React from 'react';
import './App.css'
import {TodoContainer} from "./components/containers/todo-container";

function App() {
    return (
        <div className="row" id="app">
            <div className="header container col-sm-8 col-sm-offset-2">
                <h2>ToDo Task List App</h2>
            </div>
           <TodoContainer/>
        </div>
    );
}

export default App;
