<?php

namespace App\Controller;

use App\Repository\UserRepository;
use App\Services\UserData;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api", name="api_")
 */
class ApiController extends AbstractController
{
    /**
     * @Route("/user", name="user")
     */
    // Envoi des données entrées par utilisateur
    //  et traitement pour renvoyer sur l'appli
    // public function user(UserRepository $userRepository): Response
    // {
    //     return $this->json($userRepository->findAll());
    // }
    /**
     * @Route("/category", name="category")
     */
    public function category(UserData $userData): Response
    {
        //Retourner les catégories principales et sous-catégories
        return $this->json([
            'mainCategories' => json_encode($userData->mainCategories),
            'subCategories' => json_encode($userData->subCategories),
        ]);
    }
}
