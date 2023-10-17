
import * as React from 'react';
import {TiEdit} from 'react-icons/ti';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import UpdateForm from 'components/UpdateForm/UpdateForm';
import Box from '@mui/material/Box';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
borderRadius:'5px',
    boxShadow: '1px 7px 14px 0px rgba(0, 0, 0, 0.6)',
    p: 4,
    color: '66a5ad'

  
  
  };
  

export default function ModalUpdate({contactId}){
const [open, setOpen]=React.useState(false)
const handleOpen=()=>setOpen(true)
const handleClose=()=>setOpen(false)

return(
    <div>
        <button onClick={handleOpen} type='button'><TiEdit /></button>
        <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
    Update contact
    </Typography>
    <UpdateForm onClose={handleClose} contactId={contactId}/>
  </Box>
</Modal>
    </div>
)
}


