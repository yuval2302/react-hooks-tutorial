import React, {useEffect, useState} from 'react';
import {TodoItemType} from "../../types/itemType";
import {ListContainer} from "./list-container";
import {ListItemProps, ListProps} from "../../types/ListTypes";

export function TodoList(props: ListProps<TodoItemType>) {

    return (<ListContainer listProps={props}
                           ItemComp={TodoListItem}
                           colorChange={(index: number) => index % 2 !== 0}
    />);
}

function TodoListItem(props: ListItemProps<TodoItemType>) {
    const [checked, setChecked] = useState(props.item.isDone);

    useEffect(() => {
        props.onItemChange({
            id: props.item.id,
            isDone: checked,
            task: props.item.task
        })
    }, [checked]);

    return (
        <li key={props.item.id}
            className={(props.isDark ? "list-group-item-dark " : "") + "list-group-item list-group-item-action"}
            style={checked ? {color: 'red', textDecoration: 'line-through'} : {}}>
            <input type="checkbox" checked={checked} onChange={(event) => setChecked(event.target.checked)}/>
            {props.item.task}
            <button className="btn btn-danger btn-block " onClick={(event) => props.onItemDelete(props.item)}><i className="glyphicon glyphicon-trash"/></button>
        </li>);
}
