import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import React, { useState, useCallback , useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import Grid from '@mui/material/Grid';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import Button  from '@mui/material/Button'
import { Typography } from '@mui/material';

export const Item = styled(Paper)(({ theme }) => 
  (
    {
      backgroundColor: theme.palette.mode === 'dark' ? '#f0f0f0' : '#f0f0f0',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }
  )
);
export const defaultColDef ={resizable: true,sortable: true, flex: 1, filter: true}
export const rowHeight = 60;
export const columnTypes =  {    
 numberColumn: { width: 50, filter: 'agNumberColumnFilter' },
 medalColumn: { width: 50, columnGroupShow: 'open', filter: false },
 nonEditableColumn: { editable: false },
 dateColumn: {
   filter: 'agDateColumnFilter',
   filterParams: {
     comparator: (filterLocalDateAtMidnight, cellValue) => {
       const dateParts = cellValue.split('/');
       const day = Number(dateParts[0]);
       const month = Number(dateParts[1]) - 1;
       const year = Number(dateParts[2]);
       const cellDate = new Date(year, month, day);
       if (cellDate < filterLocalDateAtMidnight) {
         return -1;
       } else if (cellDate > filterLocalDateAtMidnight) {
         return 1;
       } else {
         return 0;
       }
     },
   },
 },
}
export  function Table({tableData, columnDefs, nom}) {
  const gridRef = useRef();
  const [gridApi, setGridApi] = useState(null)
  const onGridReady = (params) => {
    setGridApi(params)
  }
  const onBtnExport = useCallback(() => {
    gridRef.current.api.exportDataAsCsv();
  }, []);
  const onQuickFilterChanged = useCallback(() => {
    gridRef.current.api.setQuickFilter(
      document.getElementById('quickFilter').value
    );
  }, []);
  const onPaginationChange=(pageSize)=>{gridApi.api.paginationSetPageSize(Number(pageSize)) }
return (
  <div style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
      <Grid  container direction="row" justifyContent="space-between" alignItems="flex-start" >
          <Item  style={{margin:"20px ",backgroundColor:'#DCDCDC'}}>
            <ManageSearchIcon variant="contained" color="success"  style={{marginBottom:"-5px"}} />
            <input type="text"  onInput={onQuickFilterChanged}  id="quickFilter"  placeholder="recherche..."  style={{backgroundColor:'#DCDCDC', border:'none',padding:"8px" }}/>
          </Item>
          <Typography align="center" variant='h4' color="primary" sx={{margin:"25px 0", fontWeight:"bold"}}>{nom}</Typography>
          <Item  style={{margin:"20px ",backgroundColor:'#DCDCDC'}}>
                  <select style={{marginRight:'5px' , padding:"10px" , borderRadius:"5px",border:"none"}}  onChange={(e)=>onPaginationChange(e.target.value)}>
                    <option value='5'>5</option>
                    <option value='25'>25</option>
                    <option value='50'>50</option>
                    <option value='100'>100</option>
                  </select>
                <Button variant="contained" color="primary" onClick={onBtnExport} style={{marginRight:"5px"}}><FileDownloadIcon/></Button>
          </Item>
      </Grid>
      <div className="ag-theme-material" style={{ height: '415px',width:"100%"}}>
          <AgGridReact ref={gridRef} debounceVerticalScrollbar='true' rowData={tableData} columnDefs={columnDefs}  defaultColDef={defaultColDef}
            onGridReady={onGridReady} columnTypes={columnTypes} rowHeight={rowHeight} pagination={true} paginationPageSize={5}/>
      </div>
  </div>
  )
}
