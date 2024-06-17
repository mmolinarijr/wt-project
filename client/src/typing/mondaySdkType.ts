export interface ContextResponse {
    data: {
        boardId: string;
    };
}

export interface BoardFieldType {
    name: string;
    king: string;
    ofType: BoardFieldType | null;
}

export interface BoardField {
    name: string;
    type: BoardFieldType;
}

export interface Item {
    id: string;
    name: string;
    column_values: {
        id: string;
        text: string;
        value: string;
    }[];
}

export interface ItemsPage {
    cursor: string | null;
    items: Item[];
}

export interface BoardsResponse {
    data: {
        boards: {
            items_page: ItemsPage;
        }[];
    };
}

export interface ApiResponse {
    id: string;
    name: string;
    column_values: {
        id: string;
        text: string;
        value: string;
    }[];
}