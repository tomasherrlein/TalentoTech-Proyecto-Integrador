import { generateToken } from "../utils/token-generator.js";

const default_user = {
  id: 1,
  email: "user@email.com",
  password: "strongPass123",
};

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = { id: 1, email };

    if (email === default_user.email && password === default_user.password) {
      const token = generateToken(user);
      res.json({ message: "Login exitoso", token: token });
    } else {
      res.status(401).json({ message: "Email o contraseña incorrectos" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" });
  }
}
