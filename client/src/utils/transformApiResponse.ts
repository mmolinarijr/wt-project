import type { ApiResponse, TransformedResponse } from '../typing/transformApiResponseType';

export function transformApiResponse(apiResponses: ApiResponse[]): TransformedResponse[] {
    return apiResponses.map(apiResponse => {
        const { id, name, column_values } = apiResponse;

        // console.log('5 - apiResponse', apiResponse);
        // console.log('5 - id', id);
        // console.log('5 - name', name);
        // console.log('5 - column_values', column_values);
        

        const transformed: TransformedResponse = {
            id,
            name,
            other: 'other',
        };

        // console.log('5 - transformed', transformed);
        

        column_values.forEach((column) => {
            let value;

            try {
                value = JSON.parse(column.value);
            } catch {
                value = column.value;
            }

            transformed[column.id] = value;
        });

        return transformed;
    })
    
}
