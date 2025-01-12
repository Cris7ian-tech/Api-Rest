import { ObjectId } from "mongodb";
import dbClient from "../dbClient.js";

class mascotasModelo {

  async create(mascota) {
    const colectionMascotas = dbClient.db.collection('mascotas');
    return await colectionMascotas.insertOne(mascota);
  }

  async update(id, mascota) {
    const colectionMascotas = dbClient.db.collection('mascotas');
    return await colectionMascotas.updateOne({ _id: new ObjectId(id) }, { $set: mascota });
  }

  async delete(id) {
    const colectionMascotas = dbClient.db.collection('mascotas');
    return await colectionMascotas.deleteOne({ _id: new ObjectId(id) });
  }

  async getAll() {
    const colectionMascotas = dbClient.db.collection('mascotas');
    return await colectionMascotas.find({}).toArray();
  }

  async getOne(id) {
    const colectionMascotas = dbClient.db.collection('mascotas');
    return await colectionMascotas.findOne({ _id: new ObjectId(id) });
  }
}

export default new mascotasModelo();