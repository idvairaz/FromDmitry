const db = require("../db");

class GenresController{
    async createGenre(req, res){
        const {name, film_id} = req.body
        const newGenre = await db.query(`INSERT INTO  genre (name, film_id) values ($1, $2) RETURNING *`, [name, film_id] )
        res.json(newGenre.rows[0])
    }

    async getGenresByMoviesId(req, res){
        const id = req.query.id
        const genres = await db.query(`SELECT * FROM genre WHERE film_id = $1`, [id])
        console.log('genres', genres.rows)
        res.json(genres.rows)
    }

    async getGenreById(req, res){
        const id = req.params.id
        const genre = await db.query(`SELECT * FROM genre WHERE genre_id = $1`, [id])
        res.json(genre.rows[0])
    }

    async getAllGenres(req, res){
        const genres = await db.query('SELECT * FROM genre')
        res.json(genres.rows)
    }

    async updateGenre(req, res){
        const {id, name, film_id} = req.body
        const genre = await db.query(`UPDATE genre SET name = $1, film_id = $2  WHERE genre_id = $3 RETURNING *`,
            [name, film_id, id])
        res.json(genre.rows[0])

    }

    async deleteGenreById(req, res){
        const id = req.params.id
        const genre = await db.query(`DELETE  FROM genre WHERE genre_id = $1`, [id])
        res.json(genre.rows[0])

    }
}

module.exports = new GenresController()