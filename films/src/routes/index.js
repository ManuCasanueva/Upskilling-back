const {Router} = require ("express")
const controller = require ("../controllers")
const middlewares = require ("../middlewares")

const router = Router();

    router.get("/films", controller.getFilms);
    
    router.post("/films",middlewares.filmsValidation, controller.createFilms )

module.exports = router;