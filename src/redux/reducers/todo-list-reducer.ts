import {ItemType, TodoItemType} from "../../types/itemType";
import {ADD_TODO_ITEM, DELETE_TODO_ITEM, TodoListActions, TOGGLE_TODO} from "../actions/list-actions";

const initialTasks = [{id: 1, task: "get Nofar laugh", isDone: false},{id: 2, task: "rose is stupid", isDone: true}];
export interface ListState<T extends ItemType> {
    list: T[];
    nextId: number;
}
export default function (state: ListState<TodoItemType> = {list : initialTasks, nextId: -1}, action: TodoListActions): ListState<TodoItemType> {
    const newStateWithList = (newList: TodoItemType[]) : ListState<TodoItemType> => {
        return {list : newList, nextId: state.nextId}
    };
    switch (action.type) {
        case TOGGLE_TODO:
            return newStateWithList(state.list.map(todo => {
                if(todo.id === action.id)
                    todo.isDone = !todo.isDone;
                return todo
            }));

        case ADD_TODO_ITEM:
            let newList = state.list.slice();
            newList.push(action.task);
            return { list: newList,
                     nextId : --state.nextId};

        case DELETE_TODO_ITEM:
            return newStateWithList(state.list.filter(task => task.id !== action.id));
        default:
            return state
    }
}
