<?php

namespace App\Entity;

use App\Repository\ViajeRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ViajeRepository::class)]
class Viaje
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 50)]
    private $cod_viaje;

    #[ORM\Column(type: 'integer')]
    private $num_plazas;

    #[ORM\Column(type: 'string', length: 255)]
    private $destino;

    #[ORM\Column(type: 'string', length: 255)]
    private $lugar_origen;

    #[ORM\Column(type: 'float')]
    private $precio;

    #[ORM\Column(type: 'integer')]
    private $viajero_id;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCodViaje(): ?string
    {
        return $this->cod_viaje;
    }

    public function setCodViaje(string $cod_viaje): self
    {
        $this->cod_viaje = $cod_viaje;

        return $this;
    }

    public function getNumPlazas(): ?int
    {
        return $this->num_plazas;
    }

    public function setNumPlazas(int $num_plazas): self
    {
        $this->num_plazas = $num_plazas;

        return $this;
    }

    public function getDestino(): ?string
    {
        return $this->destino;
    }

    public function setDestino(string $destino): self
    {
        $this->destino = $destino;

        return $this;
    }

    public function getLugarOrigen(): ?string
    {
        return $this->lugar_origen;
    }

    public function setLugarOrigen(string $lugar_origen): self
    {
        $this->lugar_origen = $lugar_origen;

        return $this;
    }

    public function getPrecio(): ?float
    {
        return $this->precio;
    }

    public function setPrecio(float $precio): self
    {
        $this->precio = $precio;

        return $this;
    }

    public function getViajeroId(): ?int
    {
        return $this->viajero_id;
    }

    public function setViajeroId(int $viajero_id): self
    {
        $this->viajero_id = $viajero_id;

        return $this;
    }

    public function toArray()
    {
        

        return ['id'=>$this->getId(),
               'cod_viaje'=> $this->cod_viaje,
                'num_plazas'=> $this->num_plazas,
                'destino'=> $this->destino,
                'lugar_origen'=> $this->lugar_origen,
                'precio'=> $this->precio,
                'viajero_id'=> $this->viajero_id,
            ];
    }
}
