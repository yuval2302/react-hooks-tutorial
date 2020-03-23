import {TodoItemType} from "../types/itemType";

export default function useHttpServer() {
    const getTodoListItems = () : Array<TodoItemType> => {
        //im too lazy for doing something real
        return [{id: 1, task: "get Nofar laugh", isDone: false},{id: 2, task: "rose is stupid", isDone: true}];
    }

    return getTodoListItems;
}
