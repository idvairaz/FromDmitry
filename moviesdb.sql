CREATE TABLE IF NOT EXISTS director
(
	director_id serial PRIMARY KEY,
	first_name VARCHAR (30) NOT NULL,
	last_name VARCHAR (30)
);

CREATE TABLE IF NOT EXISTS spectators
(
	spectators_id serial PRIMARY KEY,
	country VARCHAR (20) NOT NULL,
	amount_mln numeric (10,1) NOT NULL
);

CREATE TABLE IF NOT EXISTS scenario
(
	scenario_id serial PRIMARY KEY,
	first_name VARCHAR (30) NOT NULL,
	last_name VARCHAR (30)
);

CREATE TABLE IF NOT EXISTS genre
(
	genre_id serial PRIMARY KEY,
	genre_name VARCHAR (50) NOT NULL
);


CREATE TABLE IF NOT EXISTS persons
(
	persons_id serial PRIMARY KEY,
	first_name VARCHAR (30) NOT NULL,
	last_name VARCHAR (30) ,
	speciality VARCHAR (30) NOT NULL
);
CREATE TABLE IF NOT EXISTS movies
(
	movies_id serial PRIMARY KEY, 
	name VARCHAR (100) NOT NULL,
	release DATE NOT NULL,
	country VARCHAR (50) NOT NULL,
	fk_movies_genre integer REFERENCES genre(genre_id),
	tagline text,
	fk_movies_director integer REFERENCES director(director_id),
	fk_movies_scenario integer REFERENCES scenario(scenario_id),
	fk_movies_persons integer REFERENCES persons(persons_id),
	budget_mln integer,
	USA_fees_mln integer,
	world_fees_mln integer,
	fk_movies_spectators integer REFERENCES spectators(spectators_id),
	russias_premiere DATE NOT NULL,
	worlds_premiere DATE NOT NULL,
	releaseDVD DATE,
	allowed_age integer
);

CREATE TABLE IF NOT EXISTS roles
(
	roles_id serial PRIMARY KEY,
	first_name VARCHAR (30) NOT NULL,
	last_name VARCHAR (30) 
);

CREATE TABLE IF NOT EXISTS overlaping
(
	overlaping_id serial PRIMARY KEY,
	first_name VARCHAR (64) NOT NULL,
	last_name VARCHAR (64)
);



CREATE TABLE IF NOT EXISTS movies_roles
(
	roles_id serial REFERENCES roles(roles_id),
	movies_id integer REFERENCES movies(movies_id),
	CONSTRAINT movies_roles_pk PRIMARY KEY (roles_id, movies_id)

);

CREATE TABLE IF NOT EXISTS movies_overlaping
(
	overlaping_id serial REFERENCES overlaping(overlaping_id),
	movies_id integer REFERENCES movies(movies_id),
	CONSTRAINT movies_overlaping_pk PRIMARY KEY (overlaping_id, movies_id)

);

INSERT INTO genre VALUES

(1, 'Adventure'),
(2, 'Comedy'),
(3, 'Drama'),
(4, 'Thriller'),
(5, 'Action'),
(6, 'Animation'),
(7, 'Documentary'),
(8, 'Horror'),
(9, 'Science fiction'),
(10, 'Romantic comedy'),
(11, 'Musical');

INSERT INTO spectators VALUES

(1, 'USA', 26.15),
(3, 'USA', 15.35),
(4, 'USA', 10.3),
(5, 'RUSSIA', 10.3),
(6, 'RUSSIA', 18.2),
(7, 'RUSSIA', 12.19),
(8, 'India', 5.2),
(9, 'India', 10.5),
(10, 'India', 20.3);

INSERT INTO scenario VALUES

(1, 'PAUL',	'SAVAGE'),
(2,	'VEENA', 'SUD'),
(3,	'MATT',	'SAZAMA'),
(4,	'RICHARD', 'SIDE'),
(5,	'DAVID', NULL),
(6,	'DAVID', 'SIMON'),
(7,	'IRA', 'SACHS'),
(8, 'MICHAEL', 'SUCSY');


INSERT INTO director VALUES

(1, 'BRAD ', 'ANDERSON'),
(2,	'VEENA', 'SUD'),
(3,	'CHRIS', 'ANDERSON'),
(4,	'SEAN ', 'ANDERS'),
(5,	'HARRY ', NULL);

INSERT INTO persons VALUES

(1, 'AASH',	'AARON', 'Художник'),
(2,	'AASH', NULL,  'Художник'),
(3,	'ZACKARY ',	'SUCSY','Композитор'),
(4,	'MATT',	'ADLER', 'Композитор'),
(5,	'ALEXANDRE ', 'AJA', 'Монтажер');

INSERT INTO roles VALUES
(1, 'CHRIS', 'PINE'),
(2, 'JARED ', 'PADALECKI'),
(3, 'DON', 'PINE'),
(4, 'VINCENT', 'PAGANO'),
(5, 'CHRIS', 'PADGETT'),
(6, 'RODDY', 'PIPER');


INSERT INTO overlaping VALUES
(1, 'Иван', 'Иванов'),
(2, 'Петр ', 'Петров'),
(3, 'Сергей', 'Сергеев'),
(4, 'Федор', 'Иванов'),
(5, 'Иван', 'Федоров'),
(6, 'Федор', 'Большаков');


INSERT INTO movies VALUES
(1,'Смешное кино', '01/01/2000', 'USA', 2,'Смех спасет мир', 1, 4, 1, 35000000, 240000000, 280000000,
 		4, '01/04/2000', '01/01/2000', '01/05/2000', 12),
				
(2,'Страшное кино', '01/01/2001', 'USA', 8, 'Страх убьет мир', 2, 7, 3, 23000000, 150000000, 250000000,
 		5,	'01/06/2001', '01/01/2001', '01/08/2002', 18),
(3, 'Любовное кино', '01/01/2000', 'India', 10, 'Любовь спасет мир', 3, 8, 5, 15000000,  23000000, 30000000,
 		9, '01/04/2000', '01/01/2000', '01/05/2000', NULL);
		
INSERT INTO movies_roles VALUES
(1, 1),
( 1, 2),
( 2, 3),
( 2, 1),
( 2, 2),
( 4, 1),
( 3, 1),
( 3, 2),
( 5, 3),
( 5, 1),
( 6, 2),
( 6, 1);

INSERT INTO movies_overlaping VALUES
( 1, 1),
( 1, 2),
( 5, 3),
( 2, 1),
( 2, 2),
( 4, 1),
( 3, 1),
( 3, 2),
( 6, 3),
( 6, 1),
( 5, 2),
( 5, 1)
		


