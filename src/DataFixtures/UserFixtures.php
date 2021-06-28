<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Services\UserData;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class UserFixtures extends Fixture
{
    public const USERNB = 400;
    private UserData $userData;

    public function __construct()
    {
        $this->userData = New UserData();        
    }


    public function load(ObjectManager $manager)
    {
        //initialisation de l'objet Faker
        $faker = Factory::create();

        //generation des fixtures
        for ($i = 0; $i < self::USERNB; $i++) {
            $mainCategories = array_flip($this->userData->mainCategories);
            $subCategories = ($this->userData->subCategories);
            $user = new User();
            $user->setFirstName($faker->firstName());
            $user->setLastName($faker->unique()->lastName());
            $lngIndex = array_rand($this->userData->language, 1);
            $user->setLanguage($this->userData->language[$lngIndex]);
            $user->setHourlyRate(rand(5, 30));
            $user->setMainCategory(array_rand($mainCategories, 1));
            $user->setSubCategory(array_rand(array_flip($subCategories[$user->getMainCategory()]), 1));
            $manager->persist($user);
        }


        // $product = new Product();
        // $manager->persist($product);

        $manager->flush();
    }
}
