import {ItemType} from "./itemType";

export type ListItemProps<T extends ItemType> = {
    item: T,
    onItemChange: (changedItem: T) => void
    onItemDelete: (itemToDelete: T) => void
    isDark: boolean
}

export type ListProps<T extends ItemType> = {
    itemsToShow: Array<T>,
    onItemChange: (changedItem: T) => void,
    onItemDelete: (itemToDelete: T) => void
}
