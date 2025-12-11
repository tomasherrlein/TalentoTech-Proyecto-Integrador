import "dotenv/config";
import express from "express";
import cors from "cors";
import productsRouter from "./src/routes/products.routes.js";
import authRouter from "./src/routes/auth.routes.js";
import { authentication } from "./src/middlewares/authentication.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/products", authentication, productsRouter);

app.use((req, res, next) => {
  res.status(404).send("Recurso no encontrado o ruta invalida.");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
