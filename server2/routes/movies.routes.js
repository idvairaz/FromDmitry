const Router = require('express')
const router = new Router()
const moviesController = require('../controller/movies.controller')

router.post('/movies', moviesController.createMovie)
router.get('/movies', moviesController.getAllMovies)
router.get('/movies/:id', moviesController.getMovieById)
router.put('/movies', moviesController.updateMovie)
router.delete('/movies/:id', moviesController.deleteMovieById)


module.exports = router