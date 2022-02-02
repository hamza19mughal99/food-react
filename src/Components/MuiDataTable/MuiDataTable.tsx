import React from 'react';
import MUIDataTable, {FilterType} from "mui-datatables";

// @ts-ignore
const MuiDataTable = ({data, columns, title}) => {

    const options: FilterType | any  = {
        filter: false,
        search: false,
        rowsPerPageOptions: [],
        serverSide: true,
        jumpToPage: false,
        print: false,
        viewColumns: false,
        responsive: 'standard',
        filterType: "checkbox",
        selectableRows: 'none',
    };

    return (
        <div>
            <MUIDataTable
                title={title}
                data={data}
                columns={columns}
                options={options}
            />
        </div>
    );
};

export default MuiDataTable;
