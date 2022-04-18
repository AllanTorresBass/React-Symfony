<?php

namespace App\Controller;

use App\Entity\Viaje;
use App\Entity\Viajero;
use App\Repository\ViajeRepository;
use App\Repository\ViajeroRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TravelerController extends AbstractController
{
      private $en;

      public function __construct(EntityManagerInterface $en)
      {
          $this->en=$en;
      }
      #[Route('/', name: 'index')]
      public function index(): Response
      {
             
          return $this->render(view:'index.html.twig');
      }
///*******************************************************<<Rutas Querys Travelers>>**********************************************ª\\\\\
////////////////////<<<Consultas de todos los viajeros>>>>>>>>>>>>>>>>>>>>>>>>
    #[Route('/travelers/', name: 'app_travelers')]
    public function travelers(): Response
    {
           $repository=$this->en->getRepository(Viajero::class);
          $viajeros=$repository->findAll();
          $arrayTravelers =[];
          foreach($viajeros as $viaje){
             $arrayTravelers[]=$viaje->toArrayT();
          }
  
          return $this->json($arrayTravelers);
    }

    #[Route('/traveler/', name: 'traveler')]
    public function traveler(): Response
    {
           $repository=$this->en->getRepository(Viajero::class);
          $viajeros=$repository->find(1);
        return $this->json([
            'message' => dd($viajeros),
            'path' => 'src/Controller/TravelerController.php',
        ]);
    }
   //////////////////<<<Create Travelers>>>>
   #[Route('/travelers/create/{cedula}/{nombre}/{fecha_nacimiento}/{tlf}', name: 'CreateTravelers',methods:['get','HEAD'])]
    
   public function createTravelers($cedula,$nombre,$fecha_nacimiento,$tlf):Response
   { 
          $viajero = new Viajero();
           
   
          $viajero->setCedula($cedula);
          $viajero->setNombre($nombre);
          $viajero->setFechaNacimiento($fecha_nacimiento);
          $viajero->setTlf($tlf);
          
          $this->en->persist($viajero);
          $this->en->flush();
          

  
      
 try{    
         
      
        

          return $this->json([
           'messsage' => 'Ok, se guardo con extio.',
           'viaje'=>$viajero->toArrayT(),
            
           
            
       ]);
 }catch(Exception){
           return $this->json([
               'Error' => 'Critical Error...',
               
                   ]);
           }

      
   }

//////////////////////////<<UPDATE>>>>//////////////////////////////////////// 
#[Route('/traveler/update/{cedula}/{nombre}/{fecha_nacimiento}/{tlf}/{id}', name: 'updateTraveler',methods:['get','HEAD'])]
    public function updatTraveler($cedula,$nombre,$fecha_nacimiento,$tlf,$id) 
    {
        $repository=$this->en->getRepository(Viajero::class);
        $viajero=$repository->find($id);
       
       
        $viajero->setCedula($cedula);
        $viajero->setNombre($nombre);
        $viajero->setFechaNacimiento($fecha_nacimiento);
        $viajero->setTlf($tlf);
           $this->en->flush();

        // dd($viaje);
                try{
                return $this->json([
                            'message' => 'Se ha actualizádo',
                            'path' =>   $id,
                        ]);
                }catch(Exception $exception){
                    return $this->json([
                        'Error' => 'Critical Error...',
                        
                            ]);
                }

    }
//////////////////////////////<<<<<DELETE>>>>>>>>>>>>/////////////////////////////////////////////////////////////////
 #[Route('/traveler/delete/{cedula}/{nombre}/{fecha_nacimiento}/{tlf}/{id}', name: 'deleteTraveler',methods:['get','HEAD'])]
    public function deleteTraveler($cedula,$nombre,$fecha_nacimiento,$tlf,$id) 
    {
        $repository=$this->en->getRepository(Viajero::class);
        $viajero=$repository->find($id);
       
       
        $viajero->setCedula($cedula);
        $viajero->setNombre($nombre);
        $viajero->setFechaNacimiento($fecha_nacimiento);
        $viajero->setTlf($tlf);
           $this->en->remove($viajero);
           $this->en->flush();

    //   dd($viaje);
                try{
                return $this->json([
                            'message' => 'Se ha actualizádo',
                            'path' =>  $cedula,
                        ]);
                }catch(Exception $exception){
                    return $this->json([
                        'Error' => 'Critical Error...',
                        
                            ]);
                }

    }    
 

///*******************************************************<<Rutas Querys Travel>>**********************************************ª\\\\\
    #[Route('/travels/', name: 'travels')]
    public function travels(): Response
    {
        $repository=$this->en->getRepository(Viaje::class);
        $viajes=$repository->findAll();
        $arrayTravels =[];
        foreach($viajes as $viaje){
           $arrayTravels[]=$viaje->toArray();
        }

        return $this->json($arrayTravels);
    }
//////////////////////////<<UPDATE>>>>//////////////////////////////////////// 
#[Route('/travels/update/{cod_viaje}/{num_plazas}/{lugar_origen}/{destino}/{precio}/{id}/{id_viaje}', name: 'update',methods:['get','HEAD'])]
    public function update($cod_viaje,$num_plazas,$lugar_origen,$destino,$precio,$id,$id_viaje) 
    {
        $repository=$this->en->getRepository(Viaje::class);
        $viaje=$repository->find($id_viaje);
      
       
           $viaje->setCodViaje($cod_viaje);
           $viaje->setNumPlazas($num_plazas);
           $viaje->setDestino($destino);
           $viaje->setLugarOrigen($lugar_origen);
           $viaje->setPrecio($precio);
           $viaje->setViajeroId($id);
           $this->en->flush();

        // dd($viaje);
                try{
                return $this->json([
                            'message' => 'Se ha actualizádo',
                            'path' =>   $id,
                        ]);
                }catch(Exception $exception){
                    return $this->json([
                        'Error' => 'Critical Error...',
                        
                            ]);
                }

    }
//////////////////////////////<<<<<DELETE>>>>>>>>>>>>/////////////////////////////////////////////////////////////////
#[Route('/travels/delete/{cod_viaje}/{num_plazas}/{lugar_origen}/{destino}/{precio}/{id}', name: 'delete',methods:['get','HEAD'])]
    public function delete($cod_viaje,$num_plazas,$lugar_origen,$destino,$precio,$id) 
    {
        $repository=$this->en->getRepository(Viaje::class);
        $viaje=$repository->find($id);
            
    
           $viaje->setCodViaje($cod_viaje);
           $viaje->setNumPlazas($num_plazas);
           $viaje->setDestino($destino);
           $viaje->setLugarOrigen($lugar_origen);
           $viaje->setPrecio($precio);
           $viaje->setViajeroId($id);
           $this->en->remove($viaje);
           $this->en->flush();

    //   dd($viaje);
                try{
                return $this->json([
                            'message' => 'Se ha actualizádo',
                            'path' =>  $cod_viaje,
                        ]);
                }catch(Exception $exception){
                    return $this->json([
                        'Error' => 'Critical Error...',
                        
                            ]);
                }

    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
    #[Route('/travelOne/', name: 'travelOne')]
    public function travelOne(): Response
    {
        $repository=$this->en->getRepository(Viaje::class);
        $viajes=$repository->find(['id'=>1]);
        return $this->json([
            'message' => dd($viajes),
            'path' => 'src/Controller/TravelerController.php',
        ]);
    }

 //////////////////<<<Create Travels>>>>////////////////////////////
      #[Route('/travels/create/{cod_viaje}/{num_plazas}/{lugar_origen}/{destino}/{precio}/{viajero_id}', name: 'Create',methods:['get','HEAD'])]
    
    public function create($cod_viaje,$num_plazas,$lugar_origen,$destino,$precio,$viajero_id):Response
    { 
           $viaje = new Viaje();
            
    
           $viaje->setCodViaje($cod_viaje);
           $viaje->setNumPlazas($num_plazas);
           $viaje->setDestino($destino);
           $viaje->setLugarOrigen($lugar_origen);
           $viaje->setPrecio($precio);
           $viaje->setViajeroId($viajero_id);
           $this->en->persist($viaje);
           $this->en->flush();
           
 
   
       
  try{    
          
       
         

           return $this->json([
            'messsage' => 'Ok, se guardo con extio.',
            'viaje'=>$viaje->toArray(),
             
            
             
        ]);
  }catch(Exception){
            return $this->json([
                'Error' => 'Critical Error...',
                
                    ]);
            }

       
    }
}


// class TravelerController extends AbstractController
// {
//     #[Route('/traveler/', name: 'app_traveler')]
//     public function index(ViajeroRepository $viajeroRepository): Response
//     {
//           $viajeros=$viajeroRepository->findAll();
//         return $this->json([
//             'message' => dd($viajeros),
//             'path' => 'src/Controller/TravelerController.php',
//         ]);
//     }
// }

// class TravelerController extends AbstractController
// {
//     #[Route('/traveler/{name}', name: 'app_traveler',defaults:['name'=>null],methods:['get','HEAD'])]
//     public function index($name): Response
//     {
        
//         return $this->json([
//             'message' => $name,
//             'path' => 'src/Controller/TravelerController.php',
//         ]);
//     }
// }
