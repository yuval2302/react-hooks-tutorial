import React from "react";
import {ItemType} from "../../types/itemType";
import {useCachedItems} from "../../services/cached-items";
import {ListProps} from "../../types/ListTypes";
import useSearch from "../../services/search-services";

export type BasicContainerProps<T extends ItemType> = {
    listComponent: React.FunctionComponent<ListProps<T>>,
    dataProvider: () => Array<T>,
    addNewItems ?: T,
    saveChanges?: (arr: Array<T>) => void,
    handleSearch ?: (item: T, text:string) => boolean
}

export function BasicContainer<T extends ItemType>(props: BasicContainerProps<T>) {
    const [list, setItem, removeItem] = useCachedItems({
        addNewItem: props.addNewItems,
        dataProvider: props.dataProvider
    });
    const [searchValue, setSearchValue, searchOverList] = useSearch({ handleSearch: props.handleSearch});
    return (
        <>
            <div className="container col-sm-8 col-sm-offset-2" id="top-bar">
                {props.handleSearch &&
                SearchComp({searchValue:searchValue,setSearchValue:setSearchValue})}
                {props.saveChanges &&
                SaveButton({list: list, saveChanges: props.saveChanges})}
            </div>
            <div className="container col-sm-8 col-sm-offset-2" id="task-list-container">
                <div className="panel panel-default">
                    {
                        props.listComponent({itemsToShow: searchOverList(list), onItemChange: setItem, onItemDelete:removeItem })
                    }
                </div>
            </div>
        </>
    );
}

function SaveButton<T>(props: { list: Array<T>, saveChanges: (arr: Array<T>) => void, }) {
    return (
        <div className="col-sm-3 " id="save-bar">
            <button type="button" className="btn btn-primary" onClick={(event) => props.saveChanges(props.list)}>Save</button>
        </div>);
}

function SearchComp(props: {searchValue:string,setSearchValue: (x:string) => void}) {
    return (
        <div className="col-sm-3 " id="search-bar">
            <input type="text" placeholder={"search.."}
                   value={props.searchValue}
                   onChange={(event) => {
                       props.setSearchValue(event.target.value)
                   }} />
        </div>);
}
