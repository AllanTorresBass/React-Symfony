
import React,  { useContext, useState,useEffect } from 'react'
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddIcon from '@mui/icons-material/Add';
 import { TravelerContext } from '../contexts/TravelerContext'
  import TextField  from '@mui/material/TextField'
import DeleteDialog from './DeleteDialog';
const TravelTable = ({myId}) => {
  const context = useContext(TravelerContext)
  const [addTravel, setAddTravel] = useState({cod_viaje: '', num_plazas: '', origen: '', lugar_destino: '', precio: ''})
  const [editShow, setEditShow] = useState('')
  const [editTravel, setEditTravel] = useState('')
  const [deleteConfirmation, setDeleteConfirmation] = useState(false)
  const [deleteTravel, setDeleteTravel] = useState(false)
  // useEffect(function () {
  //   console.log('render!')
  // },[])
  // console.log(context.travelers)
  // console.log(addTravel)
  
  function handleInput(e) {
   
    setAddTravel({ ...addTravel, [e.target.name]: e.target.value });
    
  }
  
  return (
<>    
        <form onSubmit={(e)=>{context.createTravel(e,{viaje: addTravel},myId.myId);setAddTravel({cod_viaje: '', num_plazas: '', origen: '', lugar_destino: '', precio: ''});}}>  
        <Table>
   
           <TableHead>
                <TableRow>
                  <TableCell>
                     <TextField name="cod_viaje"  value={addTravel.cod_viaje} onChange={(e)=>handleInput(e)} id="outlined-basic" style={{width:'18%'}} label="Codigo de Viaje"  /> 
                 
                     <TextField name="num_plazas" value={addTravel.num_plazas}  type='number'   onChange={(e)=>handleInput(e)} id="num_plazas" style={{width:'18%'}} label="Número plazas"   /> 
                  
                     <TextField name="origen" value={addTravel.origen} onChange={(e)=>handleInput(e)}  style={{width:'18%'}} label="Origen"    /> 
                
                     <TextField name="lugar_destino" value={addTravel.lugar_destino} onChange={(e)=>handleInput(e)} id="outlined-basic" style={{width:'18%'}} label="Destino"    /> 
                
                     <TextField name="precio" type='number' value={addTravel.precio} onChange={(e)=>handleInput(e)} id="outlined-basic" style={{width:'18%'}} label="Precio"    /> 
                 
                      
                {editShow
                 ?(     <span style={{flex:1,flexDirection:'row',width:'3%',top:-10}}>
                  <IconButton onClick={()=>{
                          context.updateTravel({id:editShow,viaje:addTravel})
                          setEditShow('');setEditTravel('');
                          setAddTravel({cod_viaje: '', num_plazas: '', origen: '', lugar_destino: '', precio: ''});
                          }} style={{flex:1,width:'5%'}}><DoneIcon style={{flex:1,width:'10%',height:'30%'}}/></IconButton>
                  <IconButton onClick={()=>{
                        setEditShow('');
                         setAddTravel({cod_viaje: '', num_plazas: '', origen: '', lugar_destino: '', precio: ''});
                  }} style={{flex:1,width:'5%'}}><CloseIcon style={{flex:1,width:'10%',height:'30%'}}/></IconButton>
                  </span>
                
                )
                 :(
                   <IconButton type="submit" style={{top:10}}><AddIcon/></IconButton>
                 )
                
              }


                  
                  </TableCell>

             </TableRow>  
          </TableHead>       
               
        </Table>
          <Table>
            
              <TableBody>
              <TableRow>
                    <TableCell align="center">Codigo</TableCell>
                    <TableCell align="center">Nº Plazas</TableCell>
                    <TableCell align="center">Origen</TableCell>
                    <TableCell align="center">Destino</TableCell>
                    <TableCell align="center">Precio</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                       
                            {context.travelers.slice().reverse().map((e,i)=>
                                { let current=e;
                                   if(current===''){return<TableCell> <h1>No hay viajes Registrados</h1></TableCell> }   
                                 if(e.viajero_id=== myId.myId) return(<TableRow key={i} >
                                      
                                        <>     
                                          <TableCell align="center">
                                            { e.cod_viaje}
                                          </TableCell>
                                          <TableCell align="center">
                                            { e.num_plazas}
                                          </TableCell >
                                          <TableCell align="center">
                                            { e.lugar_origen}
                                          </TableCell>
                                          <TableCell align="center">
                                            { e.destino}
                                          </TableCell>
                                          <TableCell align="center">
                                            { e.precio}
                                          </TableCell>
                                         </>  
                                       
                                          
                                          
                                          <TableCell align="center">
                                              <IconButton onClick={()=>{setEditShow(e.id);
                                                setAddTravel({id:e.id,cod_viaje: e.cod_viaje, num_plazas: e.num_plazas, origen: e.lugar_origen, lugar_destino: e.destino, precio: e.precio})
                                                }}>
                                                  <EditIcon />
                                              </IconButton>
                                            
                                              <IconButton onClick={()=>{setDeleteConfirmation(true); setDeleteTravel({
                                                                            id:e.id,
                                                                           
                                                                            cod_viaje:e.cod_viaje,
                                                                         
                                                                          
                                                                            num_plazas: e.num_plazas,
                                                                          
                                                                         
                                                                            lugar_origen:e.lugar_origen,
                                                                         
                                                                          
                                                                            destino:e.destino,
                                                                         
                                                                          
                                                                            precio:e.precio
                                                                          
                                                                            })}}>
                                                  <DeleteForeverIcon />
                                              </IconButton>
                                            </TableCell>
                                     </TableRow>)
                      }
                      )}
              </TableBody>
          </Table>
        </form>   
        <DeleteDialog deleteTravel={deleteTravel} open={deleteConfirmation} setDeleteConfirmation={setDeleteConfirmation} travelerFlag="false"/> 
  </> 
  )
}

export default TravelTable
{/* <TableCell>
{editShow===e.id
?(<TextField 
    value={editTravel} 
    onChange={(e)=>{setEditTravel(e.target.value)}} 
    id="outlined-basic" 
    label="Edit Viaje"   
    fullWidth={true} 
    InputProps={{
      endAdornment:
      <>
      <IconButton onClick={()=>{
              context.updateTravel({id:e.id,viaje:editTravel})
              setEditShow('');setEditTravel('');
              }}><DoneIcon/></IconButton>
      <IconButton onClick={()=>{setEditShow('');setEditTravel('');}}><CloseIcon/></IconButton>
      </>
      ,
    }}
    />)
:( 

  e.cod_viaje

 
)
}

</TableCell> */}
{/* <TextField 
value={editTravel} 
onChange={(e)=>{setEditTravel(e.target.value)}} 
id="outlined-basic" 
label="Edit Viaje"   
fullWidth={true} 
InputProps={{
  endAdornment:
  <>
  <IconButton onClick={()=>{
          context.updateTravel({id:e.id,viaje:editTravel})
          setEditShow('');setEditTravel('');
          }}><DoneIcon/></IconButton>
  <IconButton onClick={()=>{
        setEditShow('');
         setAddTravel({cod_viaje: '', num_plazas: '', origen: '', lugar_destino: '', precio: ''});
  }}><CloseIcon/></IconButton>
  </>

}}
/> */}