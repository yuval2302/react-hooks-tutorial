import {AddTask} from "../add-task/add-task";
import {TodoItemType} from "../../types/itemType";
import React, {useState} from "react";
import {BasicContainer} from "./basic-container";
import {TodoList} from "../list/todo-list";
import useHttpServer from "../../services/http-service";

export function TodoContainer() {
    const [newItem, setNewItems] = useState();
    const [initialId, setInitialId] = useState(-1);
    const getSavedItems = useHttpServer();
    function onAddTask(task: string): void {
        const newTask: TodoItemType = {id: initialId, task: task, isDone: false};
        setNewItems(newTask);
        setInitialId(initialId-1);
    }

    const handleSearch = (item:TodoItemType, text:string) : boolean => {
        return item.task.toLowerCase().includes(text.toLowerCase())
    };

    const saveChanges = (arr: Array<TodoItemType>): void => {
        console.log(JSON.stringify(arr))
    };

    return (
        <div className="row" id="app-container">
            <BasicContainer listComponent={TodoList} dataProvider={getSavedItems} saveChanges={saveChanges}
                            addNewItems= {newItem} handleSearch={handleSearch} />
            <AddTask onsubmit={onAddTask}/>
        </div>
    );
}
