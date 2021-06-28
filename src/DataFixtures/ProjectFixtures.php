<?php

namespace App\DataFixtures;

use App\Entity\Project;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use Faker;

class ProjectFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        $fakerProject = Faker\Factory::create('fr_FR');
        $fakerProject->seed('1234');
        $projects = [];

        for ($i = 0; $i < 6; $i++)
        {
            $projects[$i] = new Project;
            $projects[$i]->setName($fakerProject->company());
            $projects[$i]->addUser($this->getReference('customer_' . $i));
            $projects[$i]->addUser($this->getReference('freelance_' . $i));
            $this->setReference('project_' . $i, $projects[$i]);
            $manager->persist($projects[$i]);
        }

        $manager->flush();

    }

    public function getDependencies()
    {
        return [
            UserFixtures::class,
        ];
    }
}