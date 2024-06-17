import { useEffect, useState } from 'react';
import { Table, TableHeader, TableHeaderCell, TableBody, TableRow, TableCell } from 'monday-ui-react-core';
import { DataTableProps } from '../../typing/dataTableType';
import './DataTable.css';

const DataTable = ({ data, onRowClick }: DataTableProps) => {
    const [isLoading, setIsLoading] = useState(true);

    const columns = [
        {
            id: 'Name',
            title: 'Name',
        },
        {
            id: 'Region',
            title: 'Region',
        },
        {
            id: 'Capital',
            title: 'Capital',
        },
    ];

    useEffect(() => {
        if (Array.isArray(data) && data.length > 0) {
            setIsLoading(false);
        }
    }, [data]);

    return (
        <Table
            className='data-table'
            dataState={{
                isLoading: isLoading,
            }}
            columns={columns}
            errorState={<ErrorState />}
            emptyState={<EmptyState />}>
            <TableHeader>
                <TableHeaderCell title='Country' />
                <TableHeaderCell title='Region' />
                <TableHeaderCell title='Capital' />
            </TableHeader>

            <TableBody>
                {data.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => onRowClick(item)}
                        className='clickable-row'>
                        <TableRow>
                            <TableCell>
                                <span className='clickable-text'>{item.name}</span>
                            </TableCell>
                            <TableCell>
                                <span className='clickable-text'>
                                    {item.column_values.find((cv) => cv.id === 'region')?.text || '- - -'}
                                </span>
                            </TableCell>
                            <TableCell>
                                <span className='clickable-text'>
                                    {item.column_values.find((cv) => cv.id === 'capital')?.text || '- - -'}
                                </span>
                            </TableCell>
                        </TableRow>
                    </div>
                ))}
            </TableBody>
        </Table>
    );
};

function ErrorState() {
    return (
        <div>
            <h4>There was an error fetching the data</h4>
        </div>
    );
}

function EmptyState() {
    return (
        <div>
            <h4>No data available</h4>
        </div>
    );
}

export default DataTable;
