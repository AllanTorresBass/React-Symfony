import React,{useContext} from 'react'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import { DialogActions, DialogContent } from '@mui/material';
import { TravelerContext } from '../contexts/TravelerContext'
 
const DeleteDialog = (props) => {
   const context = useContext(TravelerContext)
   const hide=()=>{
    props.setDeleteConfirmation(false)
   }
 // console.log(props.deleteTravel);
  return (
    <Dialog fullWidth={true} maxWidth='sm' open={props.open}>
      <DialogTitle>Esta seguro de que desea eliminar el viaje</DialogTitle>
       <DialogContent>
             Cedula: {props.deleteTravel.Cedula} {'\n'}Nombre: {props.deleteTravel.destino}
      </DialogContent>
        <DialogActions>
              <button onClick={hide}>Cancel</button>
             <button onClick={()=>{
                    hide();
                   context.deleteTraveler({id:props.deleteTravel.id,viajero:{cedula:props.deleteTravel.cedula, nombre:props.deleteTravel.nombre,fecha_nacimiento:props.deleteTravel.fecha_nacimiento,tlf:props.deleteTravel.tlf,}});
                  
                    }
                   }>Delete</button>   
      </DialogActions>    
    </Dialog>
  )
}
DeleteDialog.proptypes={
    open: PropTypes.bool.isRequired,
    setDeleteConfirmation:PropTypes.func.isRequired,
    deleteTravel:PropTypes.shape=({
        id:PropTypes.number,
        cedula:PropTypes.string,
                                                                         
                                                                          
        nombre:PropTypes.string,
      
     
        fecha_nacimiento:PropTypes.string,
     
      
        tlf:e.tlf,
    })
}
export default DeleteDialog