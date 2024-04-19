CREATE TABLE IF NOT EXISTS movies
(
	movies_id serial PRIMARY KEY,
	name VARCHAR (64) NOT NULL,
	release DATE NOT NULL

);

CREATE TABLE IF NOT EXISTS genre
(
	genre_id serial PRIMARY KEY,
	name VARCHAR (64) NOT NULL,
	film_id INTEGER,
	FOREIGN KEY (film_id) REFERENCES movies (movies_id)
);