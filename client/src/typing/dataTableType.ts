import { ApiResponse, Item } from "./mondaySdkType";

export interface DataTableProps {
    data: Item[];
    onRowClick: (item: ApiResponse) => void;
}