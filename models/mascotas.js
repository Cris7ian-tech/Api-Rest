import dbClient from "../dbClient.js";

class mascotasModelo {

  async create(mascota) {
    const colectionMascotas = dbClient.db.collection('mascotas');
    await colectionMascotas.insertOne(mascota);
  }
}

export default new mascotasModelo();