import {useCallback, useEffect, useReducer, useState} from "react";
import {ItemType, TodoItemType} from "../types/itemType";
import {useSelector} from "react-redux";
import {StateData} from "../redux/reducers";
import {ListState} from "../redux/reducers/todo-list-reducer";

export function useCachedItems<T extends ItemType>(props: {addNewItem ?: T, dataProvider : (state: StateData) => T[]}) : [Array<T>,(itemToSet: T) => void, (itemToRemove: T) => void] {
    const savedTodoList = useSelector(props.dataProvider);
    const [cachedList, setCachedList] = useState(new Array<T>());

    useEffect(() => {
        setCachedList(savedTodoList.concat(props.addNewItem ? props.addNewItem : []));
    },[]);

    useEffect(() => {
        setCachedList(cachedList.concat(props.addNewItem ? props.addNewItem : []));
    },[props.addNewItem]);

    const setItem = (itemToSet: T) => {
        setCachedList(cachedList.map(value => {
            if (itemToSet.id === value.id) {
                return itemToSet;
            } else {
                return value;
            }
        }));
    };

    const removeItem = (itemToRemove: T) => {
        setCachedList(cachedList.filter(value => !(value.id === itemToRemove.id)));
    };

    return [cachedList, setItem, removeItem];
}
