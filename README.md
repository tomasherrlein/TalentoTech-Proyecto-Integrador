# API Talento Tech

Este proyecto es una API RESTful construida con Node.js y Express.js, diseñada para gestionar datos de productos utilizando Google Firestore como base de datos. Incluye funcionalidades de autenticación mediante JSON Web Tokens (JWT) para proteger los endpoints relacionados con los productos.

## Características

- Autenticación de usuarios con JWTs.
- Operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para productos.
- Usa Google Firestore para la persistencia de datos.

## Comentarios

Buenas profesor! Hice lo endspoint que se pedian para aprobar y la conexión a firebase. Anduve con poco tiempo sino hubiese hecho la autenticación mas completa e inclusive podria haber hecho endpoints de categorias, eso hubiese estado interesante. Probe por encima el CRUD de productos, si encuentra un error aviseme por favor. Gracias y saludos!

## Instalación

Para configurar el proyecto localmente, sigue estos pasos:

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/tomasherrlein/TalentoTech-Proyecto-Integrador.git
    ```
2.  **Instala las dependencias:**
    ```bash
    npm install
    ```
3.  **Configura Firebase:**
    Necesitarás un proyecto de Firebase configurado con Firestore habilitado. Obtén tu configuración de Firebase y guárdala de forma segura.

## Uso

### Iniciar el servidor

Para iniciar el servidor de desarrollo, ejecuta:

```bash
npm run dev
```

El servidor se ejecutará normalmente en `http://localhost:3000` (o el puerto que esté configurado).

## Aplicación de prueba

También cuenta con una versión desplegada en vercel en

### Autenticación

Se ha configurado un usuario por defecto para facilitar el uso, ademas de que no existe un endpoint para registrarse:

- **Email:** `user@email.com`
- **Contraseña:** `strongPass123`

Usa el endpoint `/api/auth/login` para obtener un token de autenticación.

## Endpoints de la API

Todos los endpoints relacionados con productos requieren un JWT válido en la cabecera `Authorization` como un Bearer token.

### Autenticación

- `POST /api/auth/login`
  - **Descripción:** Autentica a un usuario y devuelve un JWT.
  - **Cuerpo de la Petición:**
    ```json
    {
      "email": "user@email.com",
      "password": "strongPass123"
    }
    ```
  - **Respuesta:**
    ```json
    {
      "token": "tu_token_jwt_aqui"
    }
    ```

### Productos

#### Obtener todos los productos

- `GET /api/products`
  - **Descripción:** Recupera una lista de todos los productos.
  - **Autenticación:** Requerida.

#### Obtener producto por ID

- `GET /api/products/:id`
  - **Descripción:** Recupera un único producto por su ID.
  - **Autenticación:** Requerida.

#### Crear un nuevo producto

- `POST /api/products`
  - **Descripción:** Añade un nuevo producto a la base de datos.
  - **Autenticación:** Requerida.
  - **Cuerpo de la Petición:**
    ```json
    {
      "name": "Nombre del Producto",
      "description": "Descripción del Producto",
      "price": 99.99,
      "categories": ["Categoria1", "Categoria2"]
    }
    ```

#### Actualizar un producto

- `PUT /api/products/:id`
  - **Descripción:** Actualiza un producto existente por su ID.
  - **Autenticación:** Requerida.
  - **Cuerpo de la Petición:**
    ```json
    {
      "name": "Nombre del Producto Actualizado",
      "description": "Descripción Actualizada",
      "price": 129.99,
      "categories": ["Categoria1Actualizada", "Categoria2"]
    }
    ```

#### Eliminar un producto

- `DELETE /api/products/:id`
  - **Descripción:** Elimina un producto por su ID.
  - **Autenticación:** Requerida.
