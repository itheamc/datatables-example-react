import React from 'react'
import CustomDataTable from '../CustomDataTable'
import { dataSet2, columns2 } from '../data/listdata'

const OrderPage = () => {
    return (
        <CustomDataTable id="order-data-table">
            <thead>
                <tr>
                    {columns2.map(column => (
                        <th key={column.title}>{column.title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {dataSet2.map((data, index) => {
                    return (
                        <tr key={index}>
                            {data.map((d, i) => {
                                return (
                                    <td key={i}>{d}</td>
                                )
                            })}
                        </tr>
                    )
                })
                }
            </tbody>
        </CustomDataTable>
    )
}

export default OrderPage