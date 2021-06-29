<?php

namespace App\Form;

use App\Entity\PostIt;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PostItType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('post_it_text')
            ->add('link')
            ->add('videoPath')
            ->add('imagePath')
            ->add('voteUp')
            ->add('voteDown')
            ->add('position')
            ->add('board', null, ['choice_label' => 'name'])
            ->add('type', null, ['choice_label' => 'name'])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => PostIt::class,
        ]);
    }
}
