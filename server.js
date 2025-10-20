import express from "express";
import dotenv from "dotenv";
import comidasRoutes from './src/routes/comidaRoutes.js'

const app = express();

app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send("servidor aberto...");
});

app.use('/comidas', comidasRoutes);

app.listen(serverPort, () => {
  console.log(` Servidor comidas foi iniciado em: http://localhost:${serverPort}`);
});