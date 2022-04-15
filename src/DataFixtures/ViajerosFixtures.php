<?php

namespace App\DataFixtures;

use App\Entity\Viajero;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class ViajerosFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        
       $viajero = new Viajero(); 
       $viajero->setCedula(15187193);
       $viajero->setNombre('Allan Torres');
       $viajero->setFechaNacimiento('12 de enero');
       $viajero->setTlf('04121222392');
       $manager->persist($viajero);

       $viajero2 = new Viajero(); 
       $viajero2->setCedula(14022892);
       $viajero2->setNombre('Angela Rodriguez');
       $viajero2->setFechaNacimiento('6 de marzo');
       $viajero2->setTlf('04121223089');
       $manager->persist($viajero2);

       $manager -> flush();
    
    }
}
