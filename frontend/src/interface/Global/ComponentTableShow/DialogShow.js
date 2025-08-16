import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(5),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;
  return (
    <DialogTitle sx={{ m: 0, p: 2}} {...other}>
      {children}
      {onClose ? (
        <IconButton aria-label="close" onClick={onClose} sx={{position: 'absolute',right: 8,top: 8,color: (theme) => theme.palette.grey[500]}}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = { children: PropTypes.node, onClose: PropTypes.func.isRequired,};

export default function DialogShow({tableName, open, handleClose, data, show, nom}) {

  let photo = null;
  let attributes = [];
  for (let i = 0; i < show.length; i++) {
    if(show[i][0]==="photo"){
      photo = (
        <img style={{height:"200px", width:"200px", borderRadius:"50%", marginRight:"20px"}} 
        src={`http://127.0.0.1:8000/images/${nom}/${data[show[i][0]]}`} alt="images"/>
      );
    } else {
      attributes.push(
        <li key={i} style={{fontSize:"17px"}}>
          <b style={{color:"blue"}}>{show[i][0]}: </b>
          {data[show[i][1]]}
        </li>
      );
    }
  }
  return (
    <div>
      <BootstrapDialog onClose={handleClose} aria-labelledby="alert-dialog-title" maxWidth='sm'
        open={open} aria-describedby="alert-dialog-description" fullWidth> 
        <BootstrapDialogTitle id="alert-dialog-title" onClose={handleClose} sx={{backgroundColor:"lightblue",fontWeight: "bold",fontSize:"30px", textAlign:"center", color:"blue"}}>
          {tableName}
        </BootstrapDialogTitle>
        <DialogContent sx={{backgroundColor: 'white'}}>
          <div style={{display:"flex"}}>
            {photo}
            <ul style={{columnWidth: "350px"}}>
              {attributes}
            </ul>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
