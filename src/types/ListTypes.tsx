import {ItemType} from "./itemType";

export type ListItemProps<T extends ItemType> = {
    itemId: number,
    isDark: boolean
}

export type ListProps<T extends ItemType> = {
    itemsToShow: Array<T>,
}
