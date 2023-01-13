import Button from '@mui/material/Button/Button';
import Dialog from '@mui/material/Dialog/Dialog';
import DialogActions from '@mui/material/DialogActions/DialogActions';
import DialogContent from '@mui/material/DialogContent/DialogContent';
import DialogContentText from '@mui/material/DialogContentText/DialogContentText';
import React, { useState } from 'react'

const DialogComponent = ({message, watch}) => {
    const [open, setOpen] = useState(watch);
  
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

          {/* <DialogTitle id="alert-dialog-title">
            <Typography color={'error'} variant={'h6'} > ERROR! </Typography>
          </DialogTitle> */}

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

export default DialogComponent