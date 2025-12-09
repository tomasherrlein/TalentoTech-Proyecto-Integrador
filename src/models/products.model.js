import { db } from "./data.js";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

const productsCollection = collection(db, "products");

export async function getProductById(id) {
  try {
    const productDoc = await getDoc(doc(productsCollection, id));
    if (productDoc.exists()) {
      return productDoc.data();
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getAllProducts() {
  const snapshot = await getDocs(productsCollection);
  const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return products;
}

export async function createProduct(product) {
  await addDoc(productsCollection, product);
}

export async function deleteProduct(id) {
  await deleteDoc(doc(productsCollection, id));
}

export async function updateProduct(id, newContent) {
  const doc = doc(productsCollection, id);
  await updateDoc(doc, newContent);
}
