import {AddTask} from "../add-task/add-task";
import {TodoItemType} from "../../types/itemType";
import React, {useState} from "react";
import {BasicContainer} from "./basic-container";
import {TodoList} from "../list/todo-list";
import useHttpServer from "../../services/http-service";
import {useDispatch, useSelector} from "react-redux";
import {StateData} from "../../redux/reducers";
import {addTodo} from "../../redux/actions/list-actions"

export function TodoContainer() {
    const nextId = useSelector((state: StateData) => state.todoList.nextId);
    const dispatch = useDispatch();

    function onAddTask(task: string): void {
        const newTask: TodoItemType = {id: nextId, task: task, isDone: false};
        dispatch(addTodo(newTask));
    }

    const handleSearch = (item: TodoItemType, text: string): boolean => {
        return item.task.toLowerCase().includes(text.toLowerCase())
    };

    const saveChanges = (arr: Array<TodoItemType>): void => {
        console.log(JSON.stringify(arr))
    };

    return (
        <>
            <BasicContainer listComponent={TodoList} dataProvider={(state: StateData) => state.todoList.list} saveChanges={saveChanges}
                            handleSearch={handleSearch}/>
            <AddTask onsubmit={onAddTask}/>
        </>
    );
}
