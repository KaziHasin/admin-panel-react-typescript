import React, { useState, useEffect } from 'react';
import AdvancedDataTable from '../../../components/tables/AdvancedDataTable';
import type { ColDef, GridReadyEvent } from 'ag-grid-community';

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    status: string;
    department: string;
    joinDate: string;
    lastActive: string;
}

const AdvancedTable = () => {
    const [rowData, setRowData] = useState<User[]>([]);

    const columnDefs: ColDef[] = [
        {
            field: 'name',
            headerName: 'Name',
            sortable: true,
            filter: true,
            checkboxSelection: true,
            headerCheckboxSelection: true,
        },
        {
            field: 'email',
            headerName: 'Email',
            sortable: true,
            filter: true,
        },
        {
            field: 'role',
            headerName: 'Role',
            sortable: true,
            filter: true,
        },
        {
            field: 'department',
            headerName: 'Department',
            sortable: true,
            filter: true,
        },
        {
            field: 'status',
            headerName: 'Status',
            sortable: true,
            filter: true,
            cellRenderer: (params: any) => (
                <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${params.value === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                        }`}
                >
                    {params.value}
                </span>
            ),
        },
        {
            field: 'joinDate',
            headerName: 'Join Date',
            sortable: true,
            filter: true,
        },
        {
            field: 'lastActive',
            headerName: 'Last Active',
            sortable: true,
            filter: true,
        },
    ];

    const defaultColDef: ColDef = {
        sortable: true,
        filter: true,
        resizable: true,
        flex: 1,
        minWidth: 100,
    };

    const onGridReady = (params: GridReadyEvent) => {
        fetchData();
    };

    const onRowSelected = (event: any) => {
        console.log('Selected row:', event.data);
    };

    const fetchData = async () => {
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            const mockData: User[] = Array.from({ length: 50 }, (_, i) => ({
                id: i + 1,
                name: `User ${i + 1}`,
                email: `user${i + 1}@example.com`,
                role: i % 2 === 0 ? 'Admin' : 'User',
                department: ['IT', 'HR', 'Finance', 'Marketing'][i % 4],
                status: i % 3 === 0 ? 'Inactive' : 'Active',
                joinDate: new Date(2023, i % 12, i % 28 + 1).toLocaleDateString(),
                lastActive: new Date(2024, i % 12, i % 28 + 1).toLocaleDateString(),
            }));
            setRowData(mockData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Advanced Table</h1>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    A powerful table with advanced features like multi-select, column resizing, and filtering.
                </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
                <AdvancedDataTable
                    columnDefs={columnDefs}
                    rowData={rowData}
                    onGridReady={onGridReady}
                    onRowSelected={onRowSelected}
                    pagination={true}
                    paginationPageSize={10}
                    rowSelection="multiple"
                    defaultColDef={defaultColDef}
                />
            </div>
        </div>
    );
};

export default AdvancedTable; 