const express = require('express');
const router = express.Router();

const controller = require("../controllers/filmesControllers")
 

router.get("/catalogo", controller.getAll)
router.post("/criar", controller.postFilme)
router.patch("/atualizar/:id", controller.updateFilme)
router.patch("/exibicao/:id", controller.patchFilme)
router.delete("/remover/:id", controller.deleteFilme)

module.exports = router

