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
    {props.travelerFlag==="false"
    ?(
      <>
      <DialogContent>
             Codigo: {props.deleteTravel.cod_viaje} Destino: {props.deleteTravel.destino}
      </DialogContent>
        <DialogActions>
              <button onClick={hide}>Cancel</button>
             <button onClick={()=>{
                    hide();
                   context.deleteTravel({id:props.deleteTravel.id,viaje:{cod_viaje:props.deleteTravel.cod_viaje, num_plazas:props.deleteTravel.num_plazas,lugar_origen:props.deleteTravel.lugar_origen,destino:props.deleteTravel.destino,precio:props.deleteTravel.precio}});
                  
                    }
                   }>Delete</button>   
      </DialogActions> 
      </>
    )
    :(<>
         
       <DialogContent>
             Cedula: {props.deleteTravel.cedula} {'\n'}Nombre: {props.deleteTravel.nombre}
      </DialogContent>
        <DialogActions>
              <button onClick={hide}>Cancel</button>
             <button onClick={()=>{
                    hide();
                   context.deleteTraveler({id:props.deleteTravel.id,viajero:{cedula:props.deleteTravel.cedula, nombre:props.deleteTravel.nombre,fecha_nacimiento:props.deleteTravel.fecha_nacimiento,tlf:props.deleteTravel.tlf,}});
                  
                    }
                   }>Delete</button>   
      </DialogActions>    
    </>)
    }
       

    </Dialog>
  )
}
DeleteDialog.proptypes={
    open: PropTypes.bool.isRequired,
    setDeleteConfirmation:PropTypes.func.isRequired,
    travelerFlag:PropTypes.string,
    deleteTravel:PropTypes.shape=({
        id:PropTypes.number,
        cod_viaje:PropTypes.string,
                                                                         
                                                                          
        num_plazas: PropTypes.number,
      
     
        lugar_origen:PropTypes.string,
     
      
        destino:PropTypes.string,
     
      
        precio:PropTypes.number
    }),
    deleteTravel:PropTypes.shape=({
      id:PropTypes.number,
      cedula:PropTypes.string,
                                                                       
                                                                        
      nombre:PropTypes.string,
    
   
      fecha_nacimiento:PropTypes.string,
   
    
      tlf:PropTypes.string,
  })
}
export default DeleteDialog