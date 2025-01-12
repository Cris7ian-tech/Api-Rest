import express from "express";

const route = express.Router();

import mascotaController from "../controllers/mascotas.js";

//CREAR UNA MASCOTA
route.post("/", mascotaController.create);

//CONSULTAR UNA MASCOTA
//Todas
route.get("/", mascotaController.getAll);

//Una en especifico
route.get("/:id", mascotaController.getOne);

//MODIFICAR UNA MASCOTA
route.put("/:id", mascotaController.update);

//ELIMINAR UNA MASCOTA
route.delete("/:id", mascotaController.delete);


export default route;