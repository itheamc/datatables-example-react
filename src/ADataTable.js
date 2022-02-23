/**
 * Custom functional component for the datable
 * @param {Array} columns - Array of columns (i.e. the headings of the table)
 * e.g. [{ title: "Name" }, { title: "Position" }, { title: "Office" }, { title: "Extn." }, { title: "Start date" }, { title: "Salary" }]
 * @param {Array} dataset - Array of data (i.e. the data to be displayed in the table)
 * e.g. ["Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800"]
 * Code with love by @itheamc
 */

import React, { useEffect } from 'react'
let $ = require('jquery');
require('datatables.net');
require('datatables.net-dt/css/jquery.dataTables.min.css');



const ADataTable = ({ columns, dataset }) => {

    useEffect(() => {
        if (dataset != undefined && dataset.length > 0) {
            $('#custom-data-table').DataTable({
                data: dataset,
                columns: columns,
            });
        }
    }, [])

    return (
        <table id="custom-data-table" className="custom-data-table" width="100%"></table>
    )
}

export default ADataTable