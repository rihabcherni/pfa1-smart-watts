import React, { useState, useCallback , useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import Button  from '@mui/material/Button'
import {GrDocumentCsv, GrDocumentPdf,GrDocumentExcel}  from 'react-icons/gr'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
export const Item = styled(Paper)(({ theme }) => 
  ( {
      backgroundColor: theme.palette.mode === 'dark' ? '#f0f0f0' : '#f0f0f0',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary, display:'grid', gridTemplateColumns:"repeat(3,1fr)",
      '@media (max-width: 800px)' : {
        display:"grid",
        gridTemplateColumns:"repeat(2,1fr)",
        gap:'2%'
      }
    }
  )
);
export const Item1 = styled(Paper)(({ theme }) => 
  ( {
      backgroundColor: theme.palette.mode === 'dark' ? '#f0f0f0' : '#f0f0f0',
      ...theme.typography.body2,
      textAlign: 'center',
      color: "lightblue", 
      margin:25,
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
export  function Table({ tableNamePlu,handleClickOpen ,tableData, columnDefs, url}) {   
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const gridRef = useRef();
  const [gridApi, setGridApi] = useState(null)
  const onGridReady = (params) => {
    setGridApi(params)
  }
  const onBtnExportCSV = useCallback(() => {
    window.open(url+'-csv', '_blank');
    handleClose()
  }, []);
  const onBtnExportEXCEL = useCallback(() => {
    window.open(url+'-excel', '_blank');
    handleClose()
    }, []);
  const onBtnExportAllPdf = useCallback(() => {
    fetch(url+'-all-pdf', {type: "GET"}).then((res) => res.json());
    handleClose()
  }, []);
  const onQuickFilterChanged = useCallback(() => {
    gridRef.current.api.setQuickFilter(
      document.getElementById('quickFilter').value
    );
  }, []);
  const onPaginationChange=(pageSize)=>{gridApi.api.paginationSetPageSize(Number(pageSize)) }
return (
  <div style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', padding:"0 10px"}}>
      <Grid  wrap="nowrap" container direction="row" justifyContent="space-between" alignItems="flex-start" >
          <Item1>
            <input type="text"  onInput={onQuickFilterChanged}  id="quickFilter"  placeholder="recherche..."  
              style={{backgroundColor:'#DCDCDC', border:'none',padding:"10px 30px"}}/>
          </Item1>      
          <Typography align="center" variant='h4' color="primary" sx={{margin:"25px 0", fontWeight:"bold"}}>{tableNamePlu}</Typography>
          <Item  style={{margin:"20px 10px",backgroundColor:'#DCDCDC'}}>
              <select style={{marginRight:'5px' , padding:"10px" , borderRadius:"5px",border:"none"}}  onChange={(e)=>onPaginationChange(e.target.value)}>
                    <option value='5'>5</option>
                    <option value='25'>25</option>
                    <option value='50'>50</option>
                    <option value='100'>100</option>
              </select>
              <div>
                <Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined} 
                    aria-haspopup="true" aria-expanded={open ? 'true':undefined} onClick={handleClick} variant="contained" color="warning" >
                   <FileDownloadIcon/>
                </Button>
                <Menu  id="basic-menu"  anchorEl={anchorEl} open={open}  onClose={handleClose} MenuListProps={{'aria-labelledby': 'basic-button',}}>
                  <MenuItem onClick={onBtnExportEXCEL}>
                      <ListItemIcon> <GrDocumentExcel style={{marginTop:'-4px'}}/></ListItemIcon><ListItemText sx={{marginLeft:'-15px'}}>Excel</ListItemText>
                  </MenuItem>
                  <MenuItem onClick={onBtnExportCSV}>
                      <ListItemIcon> <GrDocumentCsv style={{marginTop:'-4px'}}/></ListItemIcon><ListItemText sx={{marginLeft:'-15px'}}>CSV</ListItemText>
                  </MenuItem>
                  <MenuItem onClick={onBtnExportAllPdf}>
                      <ListItemIcon> <GrDocumentPdf style={{marginTop:'-4px'}}/></ListItemIcon><ListItemText sx={{marginLeft:'-15px'}}>PDF</ListItemText>
                  </MenuItem>
                </Menu>
              </div>
              <Button variant="contained" color="success" sx={{ marginLeft:"5px" }} onClick={handleClickOpen}><AddIcon/></Button>
          </Item>
      </Grid>
      <div className="ag-theme-material" style={{ height: '415px',width:"100%"}}>
          <AgGridReact ref={gridRef} debounceVerticalScrollbar='true' rowData={tableData} columnDefs={columnDefs}  defaultColDef={defaultColDef}
            onGridReady={onGridReady} columnTypes={columnTypes} rowHeight={rowHeight} pagination={true} paginationPageSize={5}/>
      </div>
  </div>
  )
}
