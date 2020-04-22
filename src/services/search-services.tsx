import {useState} from "react";
import {useSelector} from "react-redux";
import {StateData} from "../redux/reducers";

export default function useSearch<T>(props: {dataProvider: (state:StateData) => Array<T>,
                                            handleSearch ?: (item: T, text:string) => boolean}) :
                                            [string, (s:string) => void , () => Array<T>] {
    const [searchValue, setSearchValue] = useState("");
    const arr = useSelector(props.dataProvider);
    const searchOverList = () : Array<T> => {
        const search = props.handleSearch ? props.handleSearch : undefined;
        return search ? arr.filter(value => search(value, searchValue)) : arr ;
    };
    return [searchValue, setSearchValue,searchOverList]
}
