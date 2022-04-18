 

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
  const [showMyTravel, setShowMyTravel] = useState(false)
  const [myId, setMyId] = useState(0)
  
  
  
  function handleInput(e) {
   
    setAddTravel({ ...addTravel, [e.target.name]: e.target.value });
    
  }
 //console.log(addTravel)
  return (
<>       
   <h1 align='center' className='background2'>Agregar Viajero</h1>
        <form onSubmit={(e)=>{context.createTraveler(e,{viajero: addTravel});setAddTravel({cedula: '', nombre: '', fecha_nacimiento: '', tlf: ''});}}>  
        <Table>
   
           <TableHead >
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
            
              <TableHead className='thead'>
              <TableRow>
                    <TableCell align="center" className='color' >Cedula</TableCell>
                    <TableCell align="center" className='color'>Nombre</TableCell>
                    <TableCell align="center" className='color' >fecha de nacimiento</TableCell>
                    <TableCell align="center" className='color'>Teléfono</TableCell>
               
                    <TableCell  className='color' align="center">Action</TableCell>
               
                  </TableRow>
             </TableHead>     
             <TableBody> 
                            {context.travel.slice().reverse().map((e,i)=>
                                { let current=e;
                                    
                                    return(<TableRow key={i} className={i%2===0?'background':'background2'} >
                                      
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
                                       
                                        {/* Icons Actions */}
                                          
                                          <TableCell align="center" >
                                            <IconButton onClick={()=>{setShowMyTravel(e.id);setMyId(e.id)}}>
                                               <FormatListBulletedIcon/>
                                            </IconButton>
                                            <IconButton onClick={()=>{
                                                     setShowTravel(true)
                                                     setMyId(e.id)
                                                     }}>
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

        showMyTravel
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
                  backgroundColor: 'rgb(202, 202, 202)',
             
                 width: '60%',
                 
                 height: '70%',
                 overflowY:'auto',
                 
              }}  >
               <button onClick={()=>setShowMyTravel(false)} style={{marginLeft:'95%',cursor:'pointer'}} className="modal-close"   >X</button>
              
            <Table style={{alignContent:'center'}}> 
              <TableHead>
                  <TableRow  className='thead'>
                  <TableCell align="center"  className='color'>Codigo</TableCell>
                  <TableCell align="center" className='color'>Nª Plazas</TableCell>
                
                  <TableCell align="center"  className='color'>Origen</TableCell>
                  <TableCell align="center"  className='color'>Destino</TableCell>
                  <TableCell align="center"  className='color'>Precio</TableCell>
                  
                  </TableRow>
              </TableHead>
              <TableBody > 
              {

              context.travelers.map((e,i)=>{

              if(e.viajero_id===myId)return( 
              <TableRow key={i} style={{ backgroundColor: 'rgb(178, 182, 215)'}}>  
                    <TableCell align="center" >
                      {e.cod_viaje}
                    </TableCell>
                    <TableCell align="center">
                      {e.num_plazas}
                    </TableCell>
                    
                    <TableCell align="center">
                      {e.lugar_origen}
                    </TableCell>
                    <TableCell align="center">
                      {e.destino}
                    </TableCell>
                    <TableCell align="center">
                      {e.precio}
                    </TableCell>
             </TableRow>
                  ) 
                  })

                  } 
              </TableBody>
             </Table> 
                          
             </div>
           
           </div> 
        )

        :(<></>)

       }
      
     
     
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
              
              
               width: '80%',
               
               height: '70%',
               overflowY:'auto',
               backgroundColor: '#fff',
            }}  >
			       <button onClick={()=>setShowTravel(false)} style={{marginLeft:'95%',cursor:'pointer'}} className="modal-close"   >X</button>
             <TravelTable myId={{myId}}/>
        
         
        

			   </div>
           
          </div> 
        )
        :(<></> )
      }
  
  
  
  </> 
  )
}

export default TravelerTable
 



