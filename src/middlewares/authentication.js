import jwt from "jsonwebtoken";
import "dotenv/config";

const secret_key = process.env.JWT_SECRET_KEY;

export const authentication = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token)
    return res.status(401).json({ error: "No tienes token de autorización" });

  jwt.verify(token, secret_key, (err) => {
    if (err) return res.status(403).json({ error: "Token invalido" });
    next();
  });
};
