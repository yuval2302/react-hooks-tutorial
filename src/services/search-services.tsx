import {useState} from "react";

export default function useSearch<T>(props: {handleSearch ?: (item: T, text:string) => boolean}) : [string, (s:string) => void , (arr:Array<T>) => Array<T>]{
    const [searchValue, setSearchValue] = useState("");
    const searchOverList = (arr:Array<T>) : Array<T> => {
        const search = props.handleSearch ? props.handleSearch : undefined;
        return search ? arr.filter(value => search(value, searchValue)) : arr ;
    };
    return [searchValue, setSearchValue,searchOverList]
}
