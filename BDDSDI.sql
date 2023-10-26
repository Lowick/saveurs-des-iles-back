create table utilisateur(
id SERIAL primary KEY,
pseudo VARCHAR(255)not null unique,
email VARCHAR(255) not null,
password CHAR(60) not null,
admin BOOLEAN
);

create table avis(
id SERIAL primary key,
avis text not null,
idUtilisateur integer not null,
foreign key (idUtilisateur) references utilisateur(id)
);

create table reservation(
id SERIAL primary key,
nom VARCHAR(60) not null,
prenom VARCHAR(60) not null,
service VARCHAR(60) not null,
nombre_de_personne integer not null,
telephone CHAR(10) not null,
idUtilisateur integer not null,
foreign key (idUtilisateur) references utilisateur(id)
);

create table plat(
id SERIAL primary key,
nom VARCHAR(255) not null,
idcategorie integer not null,
idimage integer not null,
foreign key (idcategorie) references categorie(id),
foreign key (idimage) references image(id)
);

create table image(
id SERIAL primary key,
nom VARCHAR(255) not null,
mimetype varchar(60) not null,
size integer not null,
description varchar(255) not null
);

create table categorie(
id serial primary key,
nom VARCHAR(10) not null
);

INSERT INTO categorie (nom) VALUES
('Boisson'),
('Entree'),
('Plat'),
('Dessert');