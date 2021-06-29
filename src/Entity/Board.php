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
     * @ORM\OneToMany(targetEntity=PostIt::class, mappedBy="board")
     */
    private $postIt;

    /**
     * @ORM\OneToMany(targetEntity=User::class, mappedBy="board")
     */
    private $users;

    public function __construct()
    {
        $this->postIt = new ArrayCollection();
        $this->users = new ArrayCollection();
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

    /**
     * @return Collection|User[]
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(User $user): self
    {
        if (!$this->users->contains($user)) {
            $this->users[] = $user;
            $user->setBoard($this);
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        if ($this->users->removeElement($user)) {
            // set the owning side to null (unless already changed)
            if ($user->getBoard() === $this) {
                $user->setBoard(null);
            }
        }

        return $this;
    }
}
