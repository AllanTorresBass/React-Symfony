<?php

namespace App\Entity;

use App\Repository\ViajeroRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ViajeroRepository::class)]
class Viajero
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 10)]
    private $cedula;

    #[ORM\Column(type: 'string', length: 50)]
    private $nombre;

    #[ORM\Column(type: 'string', length: 255)]
    private $fecha_nacimiento;

    #[ORM\Column(type: 'string', length: 20)]
    private $tlf;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCedula(): ?string
    {
        return $this->cedula;
    }

    public function setCedula(string $cedula): self
    {
        $this->cedula = $cedula;

        return $this;
    }

    public function getNombre(): ?string
    {
        return $this->nombre;
    }

    public function setNombre(string $nombre): self
    {
        $this->nombre = $nombre;

        return $this;
    }

    public function getFechaNacimiento(): ?string
    {
        return $this->fecha_nacimiento;
    }

    public function setFechaNacimiento(string $fecha_nacimiento): self
    {
        $this->fecha_nacimiento = $fecha_nacimiento;

        return $this;
    }

    public function getTlf(): ?string
    {
        return $this->tlf;
    }

    public function setTlf(string $tlf): self
    {
        $this->tlf = $tlf;

        return $this;
    }
    public function toArrayT()
    {
        

        return ['id'=>$this->getId(),
               'cedula'=> $this->cedula, 
                'nombre'=> $this->nombre,
                'fecha_nacimiento'=> $this->fecha_nacimiento,
                'tlf'=> $this->tlf,
                 
            ];
    }
}
