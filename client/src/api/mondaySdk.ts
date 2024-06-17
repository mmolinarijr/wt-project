import mondaySdk from 'monday-sdk-js';
import type { BoardsResponse, ContextResponse, Item } from '../typing/mondaySdkType';

const monday = mondaySdk();

export function startContextListener(callback: (res: ContextResponse) => void) {
    return monday.listen('context', async (res: ContextResponse) => {
        callback(res);
    });
}

export const fetchBoardItems = async (boardId: number): Promise<Item[] | undefined> => {
    try {
        let cursor = null;
        let allItems: Item[] = [];

        do {
            const query = `query {
                    boards (ids: ${boardId}) {
                        items_page${cursor ? `(cursor: "${cursor}")` : ''} {
                            cursor
                            items {
                                id 
                                name
                                column_values {
                                    id
                                    text
                                    value
                                }
                            }
                        }
                    }
                }`;

            const response: BoardsResponse = await monday.api(query, { variables: { boardId } });
            const data = response;
            const itemsPage = data.data.boards[0].items_page;

            allItems = allItems.concat(itemsPage.items);

            cursor = itemsPage.cursor;
        } while (cursor !== null);

        return allItems;
    } catch (error) {
        console.error('fetchBoardItems error', error);
    }
};
