const db = require('../db')

class MoviesController{
    async createMovie(req, res){
        const {name, release} = req.body
        const newMovie = await db.query(`INSERT INTO  movies (name, release) values ($1, $2) RETURNING *`, [name, release] )
        res.json(newMovie.rows[0])
    }

    async getAllMovies(req, res){
        const movies = await db.query('SELECT * FROM movies')
        res.json(movies.rows)
    }

    async getMovieById(req, res){
        const id = req.params.id
        const movie = await db.query(`SELECT * FROM movies WHERE movies_id = $1`, [id])
        res.json(movie.rows[0])
    }

    async updateMovie(req, res) {
        const {id, name, release} = req.body
        const movie = await db.query(`UPDATE movies SET name = $1, release = $2  WHERE movies_id = $3 RETURNING *`,
                                    [name, release, id])
        res.json(movie.rows[0])
    }

    async deleteMovieById(req, res){
        const id = req.params.id
        const movie = await db.query(`DELETE  FROM movies WHERE movies_id = $1`, [id])
        res.json(movie.rows[0])
    }
}
module.exports = new MoviesController()