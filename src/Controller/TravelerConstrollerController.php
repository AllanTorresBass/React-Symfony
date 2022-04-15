<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TravelerConstrollerController extends AbstractController
{
    #[Route('/traveler/constroller', name: 'app_traveler_constroller')]
    public function index(): Response
    {
        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/TravelerConstrollerController.php',
        ]);
    }
}
