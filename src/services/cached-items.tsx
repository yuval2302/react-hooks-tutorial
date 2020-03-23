import {useCallback, useEffect, useReducer, useState} from "react";
import {ItemType} from "../types/itemType";

export function useCachedItems<T extends ItemType>(props: {addNewItem ?: T, dataProvider:() => Array<T>}) : [Array<T>,(itemToSet: T) => void, (itemToRemove: T) => void] {
    const [savedList, setSavedList] = useState( new Array<T>());
    const [cachedList, setCachedList] = useState(new Array<T>());

    useEffect(() => {
        setSavedList(props.dataProvider());
    }, []);

    useEffect(() => {
        setCachedList(cachedList.concat(savedList));
    },[savedList]);

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
