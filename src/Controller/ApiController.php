<?php

namespace App\Controller;

use App\Entity\User;
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
     * @Route("/category", name="category", methods={"GET"})
     */
    public function category(UserData $userData): Response
    {
        //Retourner les catégories principales et sous-catégories
        return $this->json([
            $userData->mainCategories, 
            $userData->subCategories
        ]);
    }
    /**
     * @Route("/language", name="language", methods={"GET"})
     */
    public function language(UserData $userData): Response
    {
        //retourner les langues parlées par les freelancers
        return $this->json([
            $userData->language,
        ]);
    }
}
