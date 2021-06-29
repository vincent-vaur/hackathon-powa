<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $users = [
            [
                'firstname' => 'Vincent',
                'lastname' => 'Vaur',
                'age' => 25,
                'job' => 'Developer',
            ],
            [
                'firstname' => 'Anthony',
                'lastname' => 'Deplanque',
                'age' => 24,
                'job' => 'Developer',
            ],
            [
                'firstname' => 'Chloé',
                'lastname' => 'PrendreCher',
                'age' => 26,
                'job' => 'Developer',
            ]
        ];

        foreach ($users as $userData) {
            $user = new User();
            $user
                ->setFirstname($userData['firstname'])
                ->setLastname($userData['lastname'])
                ->setAge($userData['age'])
                ->setJob($userData['job']);

                $manager->persist($user);
        }

        $manager->flush();
    }
}
