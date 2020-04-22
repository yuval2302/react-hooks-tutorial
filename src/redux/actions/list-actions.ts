import {TodoItemType} from "../../types/itemType";

export const TOGGLE_TODO = "TOGGLE_TODO";
export const ADD_TODO_ITEM = "ADD_TODO_ITEM";
export const DELETE_TODO_ITEM = "DELETE_TODO_ITEM";

interface ToggleTodoAction {
    type: typeof TOGGLE_TODO,
    id: number
}

interface AddListItemAction {
    type: typeof ADD_TODO_ITEM,
    task: TodoItemType
}

interface DeleteListItemAction {
    type: typeof DELETE_TODO_ITEM,
    id: number
}

export type TodoListActions = ToggleTodoAction | AddListItemAction | DeleteListItemAction;

export const toggleTodo = (id: number): TodoListActions => (
    {
        type: TOGGLE_TODO,
        id: id
    }
);

export const addTodo = (task: TodoItemType): TodoListActions => (
    {
        type: ADD_TODO_ITEM,
        task: task
    }
);

export const deleteTodo = (id: number): TodoListActions => (
    {
        type: DELETE_TODO_ITEM,
        id: id
    }
);
