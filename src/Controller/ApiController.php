<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use App\Services\UserData;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
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
    //     return $this->json($userRepository->findThanksToSurvey($array));
    // }

    /**
     * @Route("/mainCategory", name="main_category", methods={"GET"})
     */
    public function mainCategory(UserData $userData): Response
    {
        //Retourner les catégories principales et sous-catégories
        return $this->json([
            $userData->mainCategories, 
        ]);
    }

    /**
     * @Route("/subCategory", name="sub_category", methods={"POST"})
     */
    public function subCategory(Request $request,UserData $userData): Response
    {
        
        return $this->json([
                $userData->subCategories[$request->get('mainCategory')]
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

    /**
     * @Route("/hourly-rate", name="hourly_rate", methods={"GET"})
     */
    public function hourlyRate(UserData $userData): Response
    {
        //retourner les taux horaires des freelancers
        return $this->json([
            $userData->hourlyRate,
        ]);
    }
}
