import "dotenv/config";
import express from "express";
import cors from "cors";
import productsRouter from "./src/routes/products.routes.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/products", productsRouter);

app.use((req, res, next) => {
  res.status(404).send("Recurso no encontrado o ruta invalida.");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
