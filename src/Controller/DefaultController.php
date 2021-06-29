<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/{reactRouting}", name="default", defaults={"reactRouting": null})
     */
    public function route(): Response
    {
        return $this->render('default/index.html.twig');
    }

    /**
     * @Route("/admin/{reactRouting}", name="sub_route", defaults={"reactRouting": null})
     */
    public function subRoute(): Response
    {
        return $this->render('default/index.html.twig');
    }
}
