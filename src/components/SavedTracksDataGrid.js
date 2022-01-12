import { DataGrid } from '@mui/x-data-grid'
import React, { useState, useEffect } from 'react'

const columns = [
    { field: 'name', headerName: 'Name' },
    { field: 'artist', headerName: 'Artist' },
    { field: 'uri', headerName: 'Song Uri'},
    { field: 'addedAt', headerName: 'Added at' },
    { field: 'preview_url', headerName: 'Preview url', width: 600 }
]

const SavedTracksDataGrid = () => {
    const [tableData, setTableData] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/saved-tracks", {credentials: "include"})
            .then((data) => data.json())
            .then((data) => setTableData(data))
    }, [])
    return (
        <div style={{ height: 700, width: '100%' }}>
            <DataGrid
                rows={tableData}
                columns={columns}
                pageSize={100}
                id={Math.random()}
            />
        </div>
    )
}

export default SavedTracksDataGrid;