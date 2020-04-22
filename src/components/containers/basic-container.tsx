import React from "react";
import {ItemType} from "../../types/itemType";
import {useCachedItems} from "../../services/cached-items";
import {ListProps} from "../../types/ListTypes";
import useSearch from "../../services/search-services";
import {ListState} from "../../redux/reducers/todo-list-reducer";
import {StateData} from "../../redux/reducers";
import {useSelector} from "react-redux";

export type BasicContainerProps<T extends ItemType> = {
    listComponent: React.FunctionComponent<ListProps<T>>,
    dataProvider: (state:StateData) => Array<T>,
    saveChanges?: (arr: Array<T>) => void,
    handleSearch ?: (item: T, text:string) => boolean
}

export function BasicContainer<T extends ItemType>(props: BasicContainerProps<T>) {
    const list = useSelector(props.dataProvider);
    const [searchValue, setSearchValue, searchOverList] = useSearch({ dataProvider: props.dataProvider, handleSearch: props.handleSearch});
    return (
        <>
            <div className="container col-lg-8 col-lg-offset-2" id="task-list-container">
                <div className="panel panel-default">
                    <div className="row" id="top-bar" style={{"margin" : '2%'}}>
                        <div className="col-lg-6" >
                        {props.handleSearch &&
                        SearchComp({searchValue:searchValue,setSearchValue:setSearchValue})}
                        </div>
                        <div className="col-lg-6 pull" >
                            {props.saveChanges &&
                        SaveButton({list: list, saveChanges: props.saveChanges})}
                        </div>
                    </div>
                    {
                        props.listComponent({itemsToShow: searchOverList()})
                    }
                </div>
            </div>
        </>
    );
}

function SaveButton<T>(props: { list : Array<T>, saveChanges: (arr: Array<T>) => void, }) {
    return (
        <div className=" float-right" id="save-bar">
            <button type="button" className="btn btn-primary" onClick={(event) => props.saveChanges(props.list)}>Save</button>
        </div>);
}

function SearchComp(props: {searchValue:string,setSearchValue: (x:string) => void}) {
    return (
        <div className="col-lg-6" id="search-bar">
            <input type="text" placeholder={"search.."}
                   value={props.searchValue}
                   onChange={(event) => {
                       props.setSearchValue(event.target.value)
                   }} />
        </div>);
}
