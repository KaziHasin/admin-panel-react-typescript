import React, { useState, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import type { GridReadyEvent, ColDef, GridApi } from 'ag-grid-community';

interface AdvancedDataTableProps {
    columnDefs: ColDef[];
    onGridReady?: (params: GridReadyEvent) => void;
    onRowSelected?: (event: any) => void;
    rowData?: any[];
    pagination?: boolean;
    paginationPageSize?: number;
    rowSelection?: 'single' | 'multiple';
    defaultColDef?: ColDef;
}

const AdvancedDataTable: React.FC<AdvancedDataTableProps> = ({
    columnDefs,
    onGridReady,
    onRowSelected,
    rowData = [],
    pagination = true,
    paginationPageSize = 10,
    rowSelection = 'single',
    defaultColDef = {
        sortable: true,
        filter: true,
        resizable: true,
        flex: 1,
    },
}) => {
    const [gridApi, setGridApi] = useState<GridApi | null>(null);

    const handleGridReady = useCallback((params: GridReadyEvent) => {
        setGridApi(params.api);
        onGridReady?.(params);
    }, [onGridReady]);

    return (
        <div className="w-full h-[600px]">
            <div className="ag-theme-alpine dark:ag-theme-alpine-dark w-full h-full">
                <AgGridReact
                    columnDefs={columnDefs}
                    rowData={rowData}
                    defaultColDef={defaultColDef}
                    onGridReady={handleGridReady}
                    onRowSelected={onRowSelected}
                    pagination={pagination}
                    paginationPageSize={paginationPageSize}
                    rowSelection={rowSelection}
                    animateRows={true}
                    enableCellTextSelection={true}
                    suppressRowClickSelection={true}
                    rowMultiSelectWithClick={true}
                    suppressCellFocus={false}
                    suppressMovableColumns={false}
                    suppressDragLeaveHidesColumns={true}
                    suppressColumnVirtualisation={false}
                    suppressRowVirtualisation={false}
                    domLayout="autoHeight"
                />
            </div>
        </div>
    );
};

export default AdvancedDataTable; 