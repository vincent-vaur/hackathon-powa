<?php

namespace App\Repository;

use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method User|null find($id, $lockMode = null, $lockVersion = null)
 * @method User|null findOneBy(array $criteria, array $orderBy = null)
 * @method User[]    findAll()
 * @method User[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, User::class);
    }

    // /**
    //  * @return User[] Returns an array of User objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('u.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?User
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
    public function findThanksToSurvey(array $array): ?User
    {
        return $this
            ->getEntityManager()
            ->createQuery('
                    SELECT u FROM App\Entity\User u
                    WHERE u.main_category LIKE :main_category
                    WHERE u.sub_category LIKE :sub_category
                    WHERE u.language LIKE :language
                    WHERE u.hourly_rate LIKE :hourly_rate
            ')
            ->setParameter('main_category', $array['main_category'])
            ->setParameter('sub_category', $array['sub_category'])
            ->setParameter('language', $array['language'])
            ->setParameter('hourly_rate', $array['hourly_rate'])
            ->getResult();
    }
}
