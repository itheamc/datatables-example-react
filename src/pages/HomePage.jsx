import React from 'react'
import ADataTable from '../ADataTable'
import CustomDataTable from '../CustomDataTable'
import { dataSet, columns } from '../data/listdata'

const HomePage = () => {
    return (
        <CustomDataTable id="home-data-table" className="home-table">
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
    // return (
    //     <ADataTable id="home-table">
    //         <thead>
    //             <tr>
    //                 {columns.map(column => (
    //                     <th key={column.title}>{column.title}</th>
    //                 ))}
    //             </tr>
    //         </thead>
    //         <tbody>
    //             {dataSet.map((data, index) => {
    //                 return (
    //                     <tr key={index}>
    //                         {data.map((d, i) => {
    //                             return (
    //                                 <td key={i}>{d}</td>
    //                             )
    //                         })}
    //                     </tr>
    //                 )
    //             })
    //             }
    //         </tbody>
    //     </ADataTable>
    // )
}

export default HomePage