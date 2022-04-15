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
    const createTravel=(e,viaje)=>{
      e.preventDefault();
    console.log(viaje.viaje)
   if(parseInt(viaje.viaje.num_plazas)<0 || parseInt(viaje.viaje.num_plazas)===0){return alert('El numero de plazas debe ser mayor a 0')}
   if(parseInt(viaje.viaje.precio)<0 || parseInt(viaje.viaje.precio)===0){return alert('El precio debe ser mayor a 0')}
  console.log(viaje.viaje)
      let cod_viaje=viaje.viaje.cod_viaje;
      let num_plazas=viaje.viaje.num_plazas;
      let lugar_origen=viaje.viaje.origen;
      let destino=viaje.viaje.lugar_destino;
      let precio=viaje.viaje.precio;

   axios.get('/travels/create/'+cod_viaje+'/'+num_plazas+'/'+lugar_origen+'/'+destino+'/'+precio)
   .then(res=>{

     console.log(res.data.viaje);
     let data=[...travelers];

     setTravelers([...travelers,res.data.viaje])
   
   }).catch(err=>{
     console.log(err)
   })
  
    
         
        //  setTravelers({...travelers,viajes:[...travelers.viajes,viaje]});
          
    }
    const createTraveler=(props)=>{

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
       console.log(travel)
      const readTraveler=(props)=>{
          
    }
   
 
   //update
   const updateTravel=({viaje,id})=>{
    // return console.log(viaje)   
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
   const updateTraveler=(props)=>{
          
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
   const deleteTraveler=()=>{
          
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