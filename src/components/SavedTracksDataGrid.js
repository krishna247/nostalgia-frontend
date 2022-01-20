import { DataGrid } from '@mui/x-data-grid'
import React, { useState, useEffect } from 'react'
import {compareYear,modifyRows} from '../utils'

const columns = [
    { field: 'name', headerName: 'Name' },
    { field: 'artist', headerName: 'Artist' },
    { field: 'uri', headerName: 'Song Uri'},
    { field: 'addedAt', headerName: 'Added at',flex:1 },
    { field: 'preview_url', headerName: 'Preview url', width: 600 }
]

const SavedTracksDataGrid = (props) => {
    const [tableData, setTableData] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/saved-tracks", {credentials: "include"})
            .then((data) => data.json())
            .then(data => data.filter(compareYear))
            .then(data => data.map(modifyRows))
            .then((data) => setTableData(data))
    }, [props.yearsVal])
    return (
        <div style={{ height: 700, width: '800',color:"white" }}>
            <DataGrid
                rows={tableData}
                columns={columns}
                pageSize={100}
                style = {{width: "1500px"}}
                id={Math.random()}
                sx = {{color:"white"}}
            />
        </div>
    )
}

export default SavedTracksDataGrid;