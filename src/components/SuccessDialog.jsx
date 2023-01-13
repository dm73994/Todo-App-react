import Button from '@mui/material/Button/Button';
import Dialog from '@mui/material/Dialog/Dialog';
import DialogActions from '@mui/material/DialogActions/DialogActions';
import DialogContent from '@mui/material/DialogContent/DialogContent';
import DialogContentText from '@mui/material/DialogContentText/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle/DialogTitle';
import Typography from '@mui/material/Typography/Typography';
import React, { useState } from 'react'

const SuccessDialog = ({message, open}) => {
    const [open, setOpen] = useState(open);
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >

          <DialogTitle id="alert-dialog-title">
            <Typography color={'success'} variant={'h6'} > SUCCESS! </Typography>
          </DialogTitle>

          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {message}
            </DialogContentText>
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              OK
            </Button>
          </DialogActions>

        </Dialog>
      </div>
    );
}

export default SuccessDialog