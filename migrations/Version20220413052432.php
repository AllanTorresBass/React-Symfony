<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220413052432 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP SEQUENCE cedula_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE traveler_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE viajeros_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE viajes_id_seq CASCADE');
        $this->addSql('CREATE SEQUENCE viaje_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE viajero_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE viaje (id INT NOT NULL, cod_viaje VARCHAR(50) NOT NULL, num_plazas INT NOT NULL, destino VARCHAR(255) NOT NULL, lugar_origen VARCHAR(255) NOT NULL, precio DOUBLE PRECISION NOT NULL, viajero_id INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE viajero (id INT NOT NULL, cedula VARCHAR(10) NOT NULL, nombre VARCHAR(50) NOT NULL, fecha_nacimiento VARCHAR(255) NOT NULL, tlf VARCHAR(20) NOT NULL, PRIMARY KEY(id))');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP SEQUENCE viaje_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE viajero_id_seq CASCADE');
        $this->addSql('CREATE SEQUENCE cedula_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE traveler_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE viajeros_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE viajes_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('DROP TABLE viaje');
        $this->addSql('DROP TABLE viajero');
    }
}
