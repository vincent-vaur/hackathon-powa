<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\BoardRepository;
use App\Repository\TypeRepository;
use App\Repository\UserRepository;
use JMS\Serializer\SerializerInterface;
use PHPUnit\Util\Json;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
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
    public function index(BoardRepository $boardRepository, SerializerInterface $serializer): JsonResponse
    {
        // $data = $serializer->serialize($userRepository->findAll(), 'json');
        // var_dump($data); exit;

        return new JsonResponse($serializer->serialize($boardRepository->findOneById($this->getuser()->getBoard()), 'json'), 200, [], true);
    }
}
