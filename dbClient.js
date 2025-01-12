import 'dotenv/config';
import { MongoClient } from "mongodb";

class dbClient {
  constructor() {
    // console.log("Mascotas");
    const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.SERVER_DB}/?retryWrites=true&w=majority&appName=adopcion`;
    this.client = new MongoClient(queryString);
    this.conectarBD();
  }
  async conectarBD() {
    try {
      await this.client.connect();
      this.db = this.client.db('adopcion');
      console.log("Conectado a la base de datos");
    } catch (error) {
      console.log(error);
    }
  }
}

export default new dbClient();