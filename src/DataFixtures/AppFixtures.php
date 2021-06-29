<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use Faker\Generator;
use Faker;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $faker = Faker\Factory::create("fr_FR");
        


        for ($i = 0; $i <= 2000; $i++) {
            $users = new User;
            $users->setFirstname($faker->firstName());
            $users->setLastname($faker->lastName());
            $users->setAge($faker->numberBetween(18, 70));
            $users->setJob($faker->jobTitle());
            $manager->persist($users);
        }
        $manager->flush();

    }
}
