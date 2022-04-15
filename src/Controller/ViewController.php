<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ViewController extends AbstractController
{
    #[Route('/view', name: 'app_view')]
    public function index(): Response
    {
    $travelers=['Allan Torres','Angela Rodriguez','Carlos Terán'];

        return $this->render('index.html.twig',array(
            'travelers'=> $travelers
        ));
    }
}
