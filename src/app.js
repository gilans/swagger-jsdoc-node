const express = require("express");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "API example",
      description: "this is a API documentation example",
      contact: {
        name: "Gilberto Suarez",
      },
      servers: ["http://localhost:4000"],
    },
  },
  apis: ["./src/app.js", "./src/parameters.yml"],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /users:
 *   get:
 *     description: Returns users
 *     tags:
 *      - Users
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: users
 */
app.get("/users", (req, res) => {
  res.send("result");
});

/**
 * @swagger
 * /users:
 *   post:
 *     description: Returns users
 *     tags: [Users]
 *     produces:
 *       - application/json
 *     parameters:
 *       - $ref: '#/parameters/username'
 *     responses:
 *       200:
 *         description: users
 */
app.post("/users", (req, res) => {
  res.json(req.body);
});

app.listen(4000, () => {
  console.log("Server listen on port 4000");
});
