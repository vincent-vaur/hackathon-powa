<?php

namespace App\Entity;

use App\Repository\BoardRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=BoardRepository::class)
 */
class Board
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $name;

    /**
     * @ORM\OneToOne(targetEntity=project::class, inversedBy="board", cascade={"persist", "remove"})
     */
    private $project;

    /**
     * @ORM\OneToMany(targetEntity=PostIt::class, mappedBy="board")
     */
    private $postIt;

    public function __construct()
    {
        $this->postIt = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getProject(): ?project
    {
        return $this->project;
    }

    public function setProject(?project $project): self
    {
        $this->project = $project;

        return $this;
    }

    /**
     * @return Collection|PostIt[]
     */
    public function getPostIt(): Collection
    {
        return $this->postIt;
    }

    public function addPostIt(PostIt $postIt): self
    {
        if (!$this->postIt->contains($postIt)) {
            $this->postIt[] = $postIt;
            $postIt->setBoard($this);
        }

        return $this;
    }

    public function removePostIt(PostIt $postIt): self
    {
        if ($this->postIt->removeElement($postIt)) {
            // set the owning side to null (unless already changed)
            if ($postIt->getBoard() === $this) {
                $postIt->setBoard(null);
            }
        }

        return $this;
    }
}
