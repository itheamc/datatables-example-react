/**
 * Custom functional component for the datable
 * @param {String} id - unique id for table
 * @param {Node} children - html data to be displayed in the table e.g. <CustomDataTable><thead><tr><th>...</th></tr></thead> <tbody><tr><td>...</td></tr></tbody> </CustomDataTable>
 * Code with love by @itheamc
 */
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import $ from 'jquery'
import 'datatables.net'
import 'datatables.net-dt/css/jquery.dataTables.min.css'




export class CustomDataTable extends Component {
    static propTypes = {
        id: PropTypes.string,
        className: PropTypes.string,
        children: PropTypes.node
    }

    // Loading the datatable on component mount
    componentDidMount() {
        $(`#${this.props.id}`).DataTable();
    }

    // Distroy and remove the datatable on component unmount
    componentWillUnmount() {
        $(`#${this.props.id}`).DataTable().destroy();
    }

    render() {
        return (
            <table id={this.props.id} className={this.props.className} width="100%">
                {this.props.children}
            </table>
        )
    }
}

export default CustomDataTable




