class mascotaController {
  constructor() {
    // console.log("Mascotas");
  }

  //CREAR UNA MASCOTA
  async create(req, res) {
    try {
      res.status(201).json({status: 'create ok'});
    } catch (error) {
      res.status(500).send('error');
    }
  }

  async update(req, res) {
    try {
      res.status(201).json({status: 'update ok'});
    } catch (error) {
      res.status(500).send('error');
    }
  }

  async delete(req, res) {
    try {
      res.status(201).json({status: 'delete ok'});
    } catch (error) {
      res.status(500).send('error');
    }
  }

  async getAll(req, res) {
    try {
      res.status(201).json({status: 'getAll ok'});
    } catch (error) {
      res.status(500).send('error');
    }
  }

  async getOne(req, res) {
    try {
      res.status(201).json({status: 'getOne ok'});
    } catch (error) {
      res.status(500).send('error');
    }
  }

}

export default new mascotaController();