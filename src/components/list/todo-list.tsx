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
            <div className="row">
                <div className="col-lg-1">
                    <input type="checkbox" checked={checked} onChange={(event) => setChecked(event.target.checked)}/>
                </div>
                <div className="col-lg-9">
                    {props.item.task}
                </div>
                <div className="col-lg-2 pull-right">
                    <button className="btn btn-danger btn-block pull-right" style={{'height': '102%', 'marginLeft' : '52%',  'width': '50%'}}
                            onClick={(event) => props.onItemDelete(props.item)}>
                        <svg className="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"/>
                            <path fill-rule="evenodd"
                                  d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                  clip-rule="evenodd"/>
                        </svg>
                    </button>
                </div>
            </div>
        </li>);
}
