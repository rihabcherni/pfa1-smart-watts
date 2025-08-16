import React  from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { FormHelperText, TextField} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
const StyledButton = styled(Button)(({ theme }) => ({
  '&:hover': {
    backgroundColor: 'red', // Remplacez la couleur par celle souhaitée
  },
}));
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(0),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
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

export default function DialogAddUpdate({tableName,open,handleClose,data,onChange,handleFormSubmit,  validation, createUpdate}) {
 const {id}=data ;
 let rows = [];
  for (let i = 0; i < createUpdate.length; i++) {
    if(createUpdate[i][1]==="photo" ){
      rows.push(
        <>
          <input type="file" accept="image/*"  name="photo" id="photo" onChange={e=>onChange(e)}/> 
          <FormHelperText error={true}> {validation[createUpdate[i][0]]}</FormHelperText> 
        </>
      );
    }else if(createUpdate[i][1]!=="mot_de_passe" ){   
        rows.push(
          <>
        <TextField 
  id={createUpdate[i][1]} 
  value={data[createUpdate[i][1]]}  
  onChange={e=>onChange(e)} 
  error={!!validation[createUpdate[i][1]]} 
  label={createUpdate[i][0]} 
  variant="outlined" 
  margin="dense" 
  fullWidth 
  InputProps={{
    style: { borderRadius: '5px' },
  }}
  InputLabelProps={{
    style: { color: 'blue' }
  }}
/>
<FormHelperText error={true}>
  {validation[createUpdate[i][1]]}        
</FormHelperText>
          </>
        ); 
    }
  }
  return (
    <div>
      <BootstrapDialog onClose={handleClose} aria-labelledby="alert-dialog-title" open={open} aria-describedby="alert-dialog-description" fullWidth sx={{ marginTop:'50px' }}>
      <BootstrapDialogTitle id="alert-dialog-title" onClose={handleClose} sx={{backgroundColor:"lightblue",fontWeight: "bold",fontSize:"30px", textAlign:"center", color:"blue"}}>
          {id?"Modifier données ":"Ajouter un nouveau "} {tableName}
        </BootstrapDialogTitle>

        <DialogContent sx={{backgroundColor: 'white' }}>
          <form encType="multipart/form-data" style={{columnWidth: "200px", margin:"20px"}}>     
              {rows}            
          </form>   
        </DialogContent>

        <DialogActions sx={{backgroundColor: 'lightblue'}}>
        <StyledButton sx={{color:"white",backgroundColor: 'blue',width:"150px", margin:"8px 20px"}} onClick={()=>handleFormSubmit()} variant="contained" className='button'>
          {id?"modifier":"envoyer"}
        </StyledButton>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}