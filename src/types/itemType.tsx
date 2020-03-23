export interface ItemType {
    id:number
}
export interface TodoItemType extends ItemType{
    task:string;
    isDone: boolean;
}


