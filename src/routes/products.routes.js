import { Router } from "express";

const router = Router();

import {
  getProducts,
  getOneProductById,
  createOneProduct,
  deleteOneProduct,
  updateOneProduct,
} from "../controllers/products.controller.js";

router.get("/", getProducts);
router.get("/:id", getOneProductById);
router.post("/", createOneProduct);
router.put("/:id", updateOneProduct);
router.delete("/:id", deleteOneProduct);

export default router;
