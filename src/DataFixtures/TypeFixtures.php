<?php

namespace App\DataFixtures;

use App\Entity\Type;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class TypeFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $types = [
            'post_it',
            'link',
            'upload_video',
            'upload_image',
        ];

        foreach ($types as $typeName)
        {
            $type = new Type;
            $type->setName($typeName);
            $manager->persist($type);
        }

        $manager->flush();
    }
}
