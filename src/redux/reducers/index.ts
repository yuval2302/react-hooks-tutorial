import {combineReducers} from "redux";
import TodoListReducer, {ListState} from './todo-list-reducer'
import {TodoItemType} from "../../types/itemType";

export type StateData = {
    todoList: ListState<TodoItemType>
}

export const allReducers = combineReducers<StateData>({
    todoList: TodoListReducer
});
