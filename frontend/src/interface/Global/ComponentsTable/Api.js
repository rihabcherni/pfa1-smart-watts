import React, { useState, useEffect, useCallback } from 'react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Table} from './Table'
import {ButtonTable} from '../style'
import DialogAddUpdate from './DialogAddUpdate';
import DialogShow from './DialogShow';
import Swal from 'sweetalert';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

export default function Api({nom,tableNameSing, tableNamePlu,initialValue, url, columnDefs, show, createUpdate}) {
  const [tableData, setTableData] = useState(null)
  const [open, setOpen] =useState(false);
  const [openShow, setOpenShow] =useState(false);
  const [formData, setFormData] = useState(initialValue)
  const [picture, setPicture] = useState("s")
  const [validation, setValidation] = useState([])
  const onBtnExportPdf = useCallback((oldData) => {
    fetch(url+'-pdf'+`/${oldData.id}`, {type: "GET"}).then((res) => res.json());
    handleClose()
  }, []);
  const handleClickOpen = () => {setOpen(true);};
  const handleClose = () => {
    setOpen(false);
    setFormData(initialValue)
    setValidation([])
    };
  const handleClickOpenShow = () => {
    setOpenShow(true);
  };
  const handleCloseShow = () => {setOpenShow(false);};
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${localStorage.getItem('auth_token')}`);
  var requestOptions = {method: 'GET', headers: myHeaders, redirect: 'follow'};
  var requestOptionsDelete = {method: 'DELETE', headers: myHeaders, redirect: 'follow'};
  useEffect(() => {getData()}, [])
  const getData = () => {
    if(localStorage.getItem('auth_token')){
      fetch(url, requestOptions).then(resp => resp.json()).then(resp => {setTableData(resp.data);}).catch(err => {
        console.log("Error Reading data " + err);
      });
    }else{
      fetch(url).then(resp => resp.json()).then(resp => {setTableData(resp.data);}).catch(err => {
        console.log("Error Reading data " + err);
      });
    }
  }
  const onChange = (e) => {
      const { value, id } = e.target
      setFormData({ ...formData, [id]: value })
  }
  const handleUpdate = (oldData) => {
    setFormData(oldData)
    handleClickOpen()
  } 
  const handleShow = (oldData) => {
    setFormData(oldData)
    handleClickOpenShow()
  }
  const handleDelete = (oldData) => {
    const confirm = window.confirm("Êtes-vous sûr de vouloir supprimer cette ligne", oldData.id)
    if (confirm) {
      if(localStorage.getItem('auth_token')){
        fetch(url+ `/${oldData.id}`, requestOptionsDelete).then(resp => resp.json()).then(resp => getData())
        Swal("Suppression", "ligne supprimer avec succés" ,"success")
      }
    else{
      fetch(url+ `/${oldData.id}`,{method: "DELETE"}).then(resp => resp.json()).then(resp => getData())
      Swal("Suppression", "ligne supprimer avec succés" ,"success")
    }
    }
  }
    const handleFormSubmit= (e) =>  {
      if (formData.id) {
        const confirm = window.confirm("Êtes-vous sûr de vouloir mettre à jour cette ligne?")
        if(!localStorage.getItem('auth_token')){
          confirm && fetch(url + `/${formData.id}`, {
            method: "PUT", body: JSON.stringify(formData), headers: {
              'content-type': "application/json","Authorization":`Bearer ${localStorage.getItem('auth_token')}`
            }
          }).then(resp => resp.json())
            .then(resp => {
              if(resp.validation_error){
                setValidation(resp.validation_error)
              }else{
                handleClose()
                getData()      
              }
            }).catch(err => {
              console.log("Error Reading data " + err);
            });
        } else{ console.log(url + `/${formData.id}`)
          confirm && fetch(url + `/${formData.id}`, {
              method: "PUT", body: JSON.stringify(formData), headers: {
                'content-type': "application/json"
              }
            }).then(resp => resp.json())
            .then(resp => {
                  if(resp.validation_error){
                    setValidation(resp.validation_error)
                  }else{
                    handleClose()
                    getData()      
                  }
                }).catch(err => {
                  // Do something for an error here
                  console.log("Error Reading data " + err);
                });
                console.log(validation)  }


      } else {
          if(localStorage.getItem('auth_token')){
            fetch(url, {
              method: "POST", body: JSON.stringify(formData), headers: {
                'content-type': "application/json", 'Accept': 'application/json',"Authorization":`Bearer ${localStorage.getItem('auth_token')}`
            }}).then(resp =>resp.json() )
            .then(resp => {
              if(resp.validation_error){
                setValidation(resp.validation_error)
              }else{
                handleClose()
                getData()      
              }
            }).catch(err => {
              // Do something for an error here
              console.log("Error Reading data " + err);
            });
            console.log(validation)    
          }else{
              fetch(url, {
                method: "POST", body: JSON.stringify(formData), headers: {
                  'content-type': "application/json",
                  'Accept': 'application/json',
                }}).then(resp => resp.json())
              .then(resp => {
                if(resp.validation_error){
                  setValidation(resp.validation_error)
                }else{
                  handleClose()
                  getData()      
                }
              }).catch(err => {
                // Do something for an error here
                console.log("Error Reading data " + err);
              });
              console.log(validation) 
          }
      }
    }
    let tableColumn;
    if(columnDefs[0].field==='id'){
        tableColumn=  columnDefs.concat(
          { headerName: "Actions",sortable:false,filter:false,maxWidth: 160,minWidth: 150,pinned: 'right', cellRenderer: (params) => <div>
              <ButtonTable variant="outlined" className='tableIcon' color="warning" onClick={() => handleShow(params.data)} style={{marginRight:"2px"}}><VisibilityIcon/></ButtonTable>
              <ButtonTable variant="outlined" className='tableIcon' color="primary" onClick={() => handleUpdate(params.data)} style={{marginRight:"2px"}}><EditIcon/></ButtonTable>
              <ButtonTable variant="outlined" className='tableIcon' color="error" onClick={() => handleDelete(params.data)}><DeleteIcon/></ButtonTable>
              <ButtonTable variant="outlined" className='tableIcon' sx={{ marginLeft:"3px" }} color="error" onClick={() => onBtnExportPdf(params.data)}><PictureAsPdfIcon/></ButtonTable>       
            </div>
          })
  return (
    <div style={{width:"100%"}}>
        <Table tableNameSing={tableNameSing} tableNamePlu={tableNamePlu} handleClickOpen={handleClickOpen} columnDefs={tableColumn} tableData={tableData} url={url}/>
        <DialogAddUpdate open={open} handleClose={handleClose} createUpdate={createUpdate}
          data={formData} onChange={onChange} handleFormSubmit={handleFormSubmit}  validation={validation}  tableName={tableNameSing}/>
       
        <DialogShow open={openShow} handleClose={handleCloseShow}  show={show}
          data={formData} onChange={onChange} handleFormSubmit={handleFormSubmit} tableName={tableNameSing} nom={nom}/>
    </div>
  );
  }  
}

