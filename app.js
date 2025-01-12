//LEVANTAMOS LA API, ya esta funcional. Ahora a extender funcionalidades: rutas, controladores, modelos.

import 'dotenv/config';
import express from "express";
import routesMascotas from "./routes/mascotas.js";

const app = express();

app.use('/mascotas', routesMascotas);

try {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Servidor activo en port: ${PORT} Wacho!`));
} catch (error) {
  console.log(error);
}
