 

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
import FlightIcon from '@mui/icons-material/Flight';
 import { TravelerContext } from '../contexts/TravelerContext'
  import TextField  from '@mui/material/TextField'
  import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import DeleteDialog from './DeleteDialog';
import TravelTable from './TravelTable';
const TravelerTable = () => {
  const context = useContext(TravelerContext)
  const [addTravel, setAddTravel] = useState({cedula: '', nombre: '', fecha_nacimiento: '', tlf: ''})
  const [editShow, setEditShow] = useState('')
  const [editTravel, setEditTravel] = useState('')
  const [deleteConfirmation, setDeleteConfirmation] = useState(false)
  const [deleteTravel, setDeleteTravel] = useState(false)
  const [showTravels, setShowTravel] = useState(false)
  
  
  function handleInput(e) {
   
    setAddTravel({ ...addTravel, [e.target.name]: e.target.value });
    
  }
 //console.log(addTravel)
  return (
<>     
        <form onSubmit={(e)=>{context.createTraveler(e,{viajero: addTravel});setAddTravel({cedula: '', nombre: '', fecha_nacimiento: '', tlf: ''});}}>  
        <Table>
   
           <TableHead>
                <TableRow>
                  <TableCell>
                     <TextField name="cedula"  value={addTravel.cedula} onChange={(e)=>handleInput(e)} id="outlined-basic" style={{width:'22.5%'}} label="Cedula"  /> 
                 
                     <TextField name="nombre" value={addTravel.nombre}    onChange={(e)=>handleInput(e)}   style={{width:'22.5%'}} label="Nombre"   /> 
                  
                     <TextField name="fecha_nacimiento" value={addTravel.fecha_nacimiento} onChange={(e)=>handleInput(e)}  style={{width:'22.5%'}} label="Fecha de nacimiento"/> 
                
                     <TextField name="tlf" value={addTravel.tlf} onChange={(e)=>handleInput(e)} id="outlined-basic" style={{width:'22.5%'}} label="Telefono"    /> 
                 
                      
                {editShow
                 ?(     <span style={{flex:1,flexDirection:'row',width:'3%',top:-10}}>
                  <IconButton onClick={()=>{
                          context.updateTraveler({id:editShow,viajero:addTravel})
                          setEditShow('');setEditTravel('');
                          setAddTravel({cedula: '', nombre: '', fecha_nacimiento: '', tlf: ''});
                          }} style={{flex:1,width:'5%'}}><DoneIcon style={{flex:1,width:'8%',height:'30%'}}/></IconButton>
                  <IconButton onClick={()=>{
                        setEditShow('');
                         setAddTravel({cedula: '', nombre: '', fecha_nacimiento: '', tlf: ''});
                  }} style={{flex:1,width:'5%'}}><CloseIcon style={{flex:1,width:'8%',height:'30%'}}/></IconButton>
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
                                            <IconButton>
                                               <FormatListBulletedIcon/>
                                            </IconButton>
                                            <IconButton onClick={()=>setShowTravel(true)}>
                                              <FlightIcon/>
                                            </IconButton>
                                              <IconButton onClick={()=>{setEditShow(e.id);
                                                setAddTravel({id:e.id,cedula: e.cedula, nombre: e.nombre, fecha_nacimiento: e.fecha_nacimiento, tlf: e.tlf})
                                                }}>
                                                  <EditIcon />
                                              </IconButton>
                                            
                                              <IconButton onClick={()=>{setDeleteConfirmation(true); setDeleteTravel({
                                                                            id:e.id,
                                                                           
                                                                            cedula:e.cedula,
                                                                         
                                                                          
                                                                            nombre: e.nombre,
                                                                          
                                                                         
                                                                            fecha_nacimiento:e.fecha_nacimiento,
                                                                         
                                                                          
                                                                            tlf:e.tlf,
                                                                         
                                                                          
                                                                          
                                                                          
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
        <DeleteDialog deleteTravel={deleteTravel} open={deleteConfirmation} setDeleteConfirmation={setDeleteConfirmation} travelerFlag="true"/> 
      {
        showTravels
        ?(
        <div style={{
          position: 'fixed',
           display: 'flex',
          zIndex:999,
          top:0,
          left:0,
          width:'100%',
          minHeight:'100vh',
          backgroundColor:'rgba(0,0,0,0.75)',
           
          justifyContent: 'center',
          alignItems: 'center',
        }}>
            <div style={{
                position:'absolute',
              
              
               width: '60%',
               
               height: '70%',
               overflowY:'auto',
               backgroundColor: '#fff',
            }}  >
			       <button onClick={()=>setShowTravel(false)} style={{marginLeft:'95%',cursor:'pointer'}} className="modal-close"   >X</button>
             <TravelTable/>
			   </div>
           
          </div> 
        )
        :(<></> )
      }
  
  
  
  </> 
  )
}

export default TravelerTable
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