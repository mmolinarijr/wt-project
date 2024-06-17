interface ColumnValue {
    id: string,
    text: string,
    value: string,
}

export interface ApiResponse {
    id: string,
    name: string,
    column_values: ColumnValue[]
}

export interface TransformedResponse {
    [key: string]: string | number
}