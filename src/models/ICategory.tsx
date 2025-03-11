import {IItem} from "./IItem.tsx";

export interface ICategory {
    id: number;
    name: string;
    on_stop: boolean;
    items: IItem[];
}
