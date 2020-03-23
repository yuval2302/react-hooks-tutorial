import React from 'react';
import {ItemType} from "../../types/itemType";
import {ListItemProps, ListProps} from "../../types/ListTypes";


export type ListContainerProps<T extends ItemType> = {
    listProps: ListProps<T>
    ItemComp: React.FunctionComponent<ListItemProps<T>>,
    colorChange?: (comparable: number) => boolean
}


export function ListContainer<T extends ItemType>(props: ListContainerProps<T>) {
    return (<div>
        <ul className="list-group">
            {props.listProps.itemsToShow.map((value, index) => {
                return <props.ItemComp key={"Item-comp" + value.id} item={value}
                                       onItemChange={props.listProps.onItemChange}
                                       onItemDelete={props.listProps.onItemDelete}
                                       isDark={(props.colorChange ? props.colorChange(index) : false)}/>

            })}
        </ul>
    </div>);
}
