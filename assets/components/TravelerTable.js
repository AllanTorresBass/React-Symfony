
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
const TravelTable = () => {
  const context = useContext(TravelerContext)
  const [addTravel, setAddTravel] = useState({cod_viaje: '', num_plazas: '', origen: '', lugar_destino: '', precio: ''})
  const [editShow, setEditShow] = useState('')
  const [editTravel, setEditTravel] = useState('')
  const [deleteConfirmation, setDeleteConfirmation] = useState(false)
  const [deleteTravel, setDeleteTravel] = useState(false)
  // useEffect(function () {
  //   console.log('render!')
  // },[])
   console.log(context.travel)
  // console.log(addTravel)
  
  function handleInput(e) {
   
    setAddTravel({ ...addTravel, [e.target.name]: e.target.value });
    
  }
 //console.log(addTravel)
  return (
<>    
        <form onSubmit={(e)=>{context.createTravel(e,{viaje: addTravel});setAddTravel({cod_viaje: '', num_plazas: '', origen: '', lugar_destino: '', precio: ''});}}>  
        <Table>
   
           <TableHead>
                <TableRow>
                  <TableCell>
                     <TextField name="cedula"  value={addTravel.cod_viaje} onChange={(e)=>handleInput(e)} id="outlined-basic" style={{width:'23.5%'}} label="Cedula"  /> 
                 
                     <TextField name="nombre" value={addTravel.num_plazas}  type='number'   onChange={(e)=>handleInput(e)} id="num_plazas" style={{width:'23.5%'}} label="Nombre"   /> 
                  
                     <TextField name="fecha_nacimiento" value={addTravel.origen} onChange={(e)=>handleInput(e)}  style={{width:'23.5%'}} label="Fecha de nacimiento"/> 
                
                     <TextField name="tlf" value={addTravel.lugar_destino} onChange={(e)=>handleInput(e)} id="outlined-basic" style={{width:'23.5%'}} label="Telefono"    /> 
                 
                      
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
                    <TableCell align="center">Cedula</TableCell>
                    <TableCell align="center">Nombre</TableCell>
                    <TableCell align="center">fecha de nacimiento</TableCell>
                    <TableCell align="center">Teléfono</TableCell>
               
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                       
                            {context.travel.slice().reverse().map((e,i)=>
                                { let current=e;
                                     
                                    return(<TableRow key={i} >
                                      
                                        <>     
                                          <TableCell align="center">
                                            { e.cedula}
                                          </TableCell>
                                          <TableCell align="center">
                                            { e.nombre}
                                          </TableCell >
                                          <TableCell align="center">
                                            { e.fecha_nacimiento}
                                          </TableCell>
                                          <TableCell align="center">
                                            { e.tlf}
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
        <DeleteDialog deleteTravel={deleteTravel} open={deleteConfirmation} setDeleteConfirmation={setDeleteConfirmation}/> 
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