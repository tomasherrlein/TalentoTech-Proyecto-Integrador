import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../models/products.model.js";

export const getProducts = async (req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los productos" });
  }
};

export const getOneProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await getProductById(id);

    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al buscar el producto" });
  }
};

export const createOneProduct = async (req, res) => {
  try {
    if (!req.body.name) {
      return res.status(422).json({ error: "El nombre es obligatorio" });
    }

    const productData = req.body;
    const createdProduct = await createProduct(productData);

    res
      .status(201)
      .json({ message: "Producto creado exitosamente", createdProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear el producto" });
  }
};

export const deleteOneProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await getProductById(id);
    if (!product) {
      return res
        .status(404)
        .json({ error: "Producto no encontrado, no se pudo eliminar" });
    }

    await deleteProduct(id);

    res.json({ message: "Producto eliminado" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar" });
  }
};

export const updateOneProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const newContent = req.body;

    const updatedProduct = await updateProduct(id, newContent);

    res.json({ message: "Producto actualizado", updatedProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar" });
  }
};
