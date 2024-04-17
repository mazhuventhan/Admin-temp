import React from "react";
import { DataGrid } from '@mui/x-data-grid';
const Table = ({ rows,columns }) => {
    
    return (
        <>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
            />
        </>
    )
}
export default Table;