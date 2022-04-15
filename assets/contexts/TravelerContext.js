import React, { useEffect } from 'react'
import { createContext,useState } from 'react';
 import axios from 'axios';
import { ConstructionOutlined } from '@mui/icons-material';

export const TravelerContext= createContext(); 
 
 const TravelerContextProvider = ({children}) => {
   //travel es la variable de estado deonde cargamos la información del viajero
    const [travel, setTravel] = useState([]);
    //travelers es la variable de estado deonde cargamos la información de los viajes
    const [travelers, setTravelers] = useState([]);
    const [respuesta, setRespuesta] = useState('');
  
      // const [travelers, setTravelers] = useState(
      //   { 
      //      viajes:[{id:1,viaje:'Carupano'},{id:2,viaje:'La guaira'},{id:3,viaje:'Tucaca'}],
      //     viajeros:[{id:1,name:'Allan Torres'},{id:2,name:'Angela Rodriguez'},{id:3,name:'Oscar Perez'}],
          
      //    }
      //  );

   //create
    const createTravel=(e,viaje,viajero_id)=>{
      // return console.log(viajero_id)
      e.preventDefault();
    
   if(parseInt(viaje.viaje.num_plazas)<0 || parseInt(viaje.viaje.num_plazas)===0){return alert('El numero de plazas debe ser mayor a 0')}
   if(parseInt(viaje.viaje.precio)<0 || parseInt(viaje.viaje.precio)===0){return alert('El precio debe ser mayor a 0')}
 
      let cod_viaje=viaje.viaje.cod_viaje;
      let num_plazas=viaje.viaje.num_plazas;
      let lugar_origen=viaje.viaje.origen;
      let destino=viaje.viaje.lugar_destino;
      let precio=viaje.viaje.precio;

   axios.get('/travels/create/'+cod_viaje+'/'+num_plazas+'/'+lugar_origen+'/'+destino+'/'+precio+'/'+viajero_id)
   .then(res=>{

     console.log(res.data.viaje);
     let data=[...travelers];

     setTravelers([...travelers,res.data.viaje])
   
   }).catch(err=>{
     console.log(err)
   })
  
    
         
        //  setTravelers({...travelers,viajes:[...travelers.viajes,viaje]});
          
    }
    const createTraveler=(e,viajero)=>{
      e.preventDefault();
    
     if(viajero.viajero.cedula==='' || viajero.viajero.nombre==='' || viajero.viajero.fecha_nacimiento==='' || viajero.viajero.tlf===''){return alert('No puede haber campos vacios')}
    
   
        let cedula=viajero.viajero.cedula;
        let nombre=viajero.viajero.nombre;
        let fecha_nacimiento=viajero.viajero.fecha_nacimiento;
        let tlf=viajero.viajero.tlf;
        
  
     axios.get('/travelers/create/'+cedula+'/'+nombre+'/'+fecha_nacimiento+'/'+tlf)
     .then(res=>{
  
           ////Petición para leer toda la infomacions de lo viajeros guardados
           axios.get('https://127.0.0.1:8000/travelers/')
           .then(res=>{
       
            //  console.log(res.data);
             setTravel(res.data)
           
           }).catch(err=>{
             console.log(err)
           })
     
     }).catch(err=>{
       console.log(err)
     })
    
      
           
    }
 
 
    
      
      useEffect(function () {
        ////Petición para leer toda la infomacions de lo viajes guardados
         axios.get('https://127.0.0.1:8000/travels/')
         .then(res=>{
     
          //  console.log(res.data);
           setTravelers(res.data)
         
         }).catch(err=>{
           console.log(err)
         })
        ////Petición para leer toda la infomacions de lo viajeros guardados
         axios.get('https://127.0.0.1:8000/travelers/')
         .then(res=>{
     
          //  console.log(res.data);
           setTravel(res.data)
         
         }).catch(err=>{
           console.log(err)
         })
         
      },[])
      // console.log(travel)
      const readTraveler=(props)=>{
          
    }
   
 
   //update
   const updateTravel=({viaje,id})=>{
     
    
    let cod_viaje= viaje.cod_viaje;
    let num_plazas= viaje.num_plazas;
    let lugar_origen= viaje.origen;
    let destino= viaje.lugar_destino;
    let precio= viaje.precio;
    axios.get('/travels/update/'+cod_viaje+'/'+num_plazas+'/'+lugar_origen+'/'+destino+'/'+precio+'/'+id)
    .then(res=>{
 
                axios.get('https://127.0.0.1:8000/travels/')
                .then(res=>{
            
                //  console.log(res.data);
                  setTravelers(res.data)
                
                }).catch(err=>{
                  console.log(err)
                })
              
    }).catch(err=>{
      console.log(err)
    })


   
        
   }
   const updateTraveler=({viajero,id})=>{
              // return console.log(viajero)   
    let cedula= viajero.cedula;
    let nombre= viajero.nombre;
    let fecha_nacimiento= viajero.fecha_nacimiento;
    let tlf= viajero.tlf;
     
    axios.get('/traveler/update/'+cedula+'/'+nombre+'/'+fecha_nacimiento+'/'+tlf+'/'+id)
    .then(res=>{
 
            axios.get('https://127.0.0.1:8000/travelers/')
            .then(res=>{
        
            //  console.log(res.data);
              setTravel(res.data)
            
            }).catch(err=>{
              console.log(err)
            })
              
    }).catch(err=>{
      console.log(err)
    })

   }
   //delete
   const deleteTravel=({id,viaje})=>{
    
     let cod_viaje= viaje.cod_viaje;
    let num_plazas= viaje.num_plazas;
    let lugar_origen= viaje.lugar_origen;
    let destino= viaje.destino;
    let precio= viaje.precio;
    // return console.log(viaje.lugar_destino,viaje.lugar_destino)
    axios.get('/travels/delete/'+cod_viaje+'/'+num_plazas+'/'+lugar_origen+'/'+destino+'/'+precio+'/'+id)
    .then(res=>{
 
      // console.log(res.data.viaje);
      //  let data = [...travelers.viajes];
      //   let newObj = travelers.viajes.filter(e=>e.id!=id);
      //   console.log(newObj)
      //   setTravelers({...travelers,viajes:[...newObj]})
                axios.get('https://127.0.0.1:8000/travels/')
                .then(res=>{
            
                //  console.log(res.data);
                  setTravelers(res.data)
                
                }).catch(err=>{
                  console.log(err)
                })
    
    }).catch(err=>{
      console.log(err)
    })


   


 
   }
   const deleteTraveler=({viajero,id})=>{
                    //  return console.log('viajero')   
    let cedula= viajero.cedula;
    let nombre= viajero.nombre;
    let fecha_nacimiento= viajero.fecha_nacimiento;
    let tlf= viajero.tlf;
     
    axios.get('/traveler/delete/'+cedula+'/'+nombre+'/'+fecha_nacimiento+'/'+tlf+'/'+id)
    .then(res=>{
 
            axios.get('https://127.0.0.1:8000/travelers/')
            .then(res=>{
        
            //  console.log(res.data);
              setTravel(res.data)
            
            }).catch(err=>{
              console.log(err)
            })
              
    }).catch(err=>{
      console.log(err)
    })
   }


  return (
    <TravelerContext.Provider value={{
           travelers:travelers,
           travel:travel,
           createTravel,
           createTraveler,
           
           readTraveler,
           updateTravel,
           updateTraveler,
           deleteTravel,
           deleteTraveler,
          
    }}>
        {children}
    </TravelerContext.Provider>
  )
}
export default TravelerContextProvider;