import React from 'react';
import './App.css'
import {TodoContainer} from "./components/containers/todo-container";

function App() {
    return (
        <div className="row" id="app">
            <div className="header container col-lg-8 col-lg-offset-2">
                <h2>ToDo Task List App</h2>
            </div>
            <div className="row container" id="app-container">
                <TodoContainer/>
            </div>
        </div>
    );
}

export default App;
