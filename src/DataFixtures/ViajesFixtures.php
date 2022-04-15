<?php

namespace App\DataFixtures;

 
use App\Entity\Viaje;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class ViajesFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
          
         $viaje = new Viaje();
       
         $viaje->setCodViaje('cod_01');
         $viaje->setNumPlazas(2);
         $viaje->setDestino('Aruba');
         $viaje->setLugarOrigen('Trujillo');
         $viaje->setPrecio(1400);
          $viaje->setViajeroId(1);
         $manager->persist($viaje);

         $viaje2 = new Viaje();
         $viaje2->setCodViaje('cod_01');
         $viaje2->setNumPlazas(2);
         $viaje2->setDestino('Aruba');
         $viaje2->setLugarOrigen('Trujillo');
         $viaje2->setPrecio(1400);
          $viaje2->setViajeroId(1);
         $manager->persist($viaje2);
        
        $manager->flush();
     
    }
}
 