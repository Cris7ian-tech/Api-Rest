import mascotasModelo from "../models/mascotas.js";

class mascotaController {
  constructor() {
    // console.log("Mascotas");
  }

  //CREAR UNA MASCOTA
  async create(req, res) {
    try {
      const data = await mascotasModelo.create(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).send('error');
    }
  }

  async update(req, res) {
    try {
      const {id} = req.params;
      const data = await mascotasModelo.update(id, req.body);
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).send('error');
    }
  }

  async delete(req, res) {
    try {
      const {id} = req.params;
      const data = await mascotasModelo.delete(id);
      res.status(206).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).send('error');
    }
  }

  async getAll(req, res) {
    try {
      const data = await mascotasModelo.getAll();
      res.status(201).json(data);
    } catch (error) {
      res.status(500).send('error');
    }
  }

  async getOne(req, res) {
    try {
      const data = await mascotasModelo.getOne(req.params.id);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).send('error');
    }
  }

}

export default new mascotaController();