<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TravelerViewController extends AbstractController
{
    #[Route('/traveler/view', name: 'app_traveler_view')]
    public function index(): Response
    {
        return $this-> render('index.html.twig');
    }
}
