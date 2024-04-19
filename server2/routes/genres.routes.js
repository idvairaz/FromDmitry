const Router = require('express')
const router = new Router()
const genresController = require('../controller/genres.controller')

router.post('/genres', genresController.createGenre)
router.get('/genres', genresController.getGenresByMoviesId)

router.get('/genres/:id', genresController.getGenreById)
router.get('/allgenres', genresController.getAllGenres)
router.put('/genres', genresController.updateGenre)
router.delete('/genres/:id', genresController.deleteGenreById)

module.exports = router