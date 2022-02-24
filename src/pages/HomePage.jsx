import React from 'react'
import CustomDataTable from '../CustomDataTable'
import { dataSet, columns } from '../data/listdata'

const HomePage = () => {
    return (
        <CustomDataTable id="home-data-table">
            <thead>
                <tr>
                    {columns.map(column => (
                        <th key={column.title}>{column.title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {dataSet.map((data, index) => {
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

export default HomePage