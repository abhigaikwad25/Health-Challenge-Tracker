import React from 'react'

function progress() {
    return (
        <div >
            <div className="container d-flex justify-content-between mx-5 ">
                <div className="names bg-light p-4 ">
                    <table >
                        <th>
                            <td>Candidate Names</td>
                        </th>
                        
                        <tr>
                            <td>Smith</td>
                        </tr>
                        <tr>
                            <td>Johnson</td>
                        </tr>
                        <tr>
                            <td>Williams</td>
                        </tr>
                    </table>
                </div>
                <div className="graph bg-dark">

                </div>
            </div>
        </div>
    )
}

export default progress
