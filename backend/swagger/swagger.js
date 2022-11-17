const swaggerUi = require("swagger-ui-express")
const swaggereJsdoc = require("swagger-jsdoc")

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "FindYou",
      description:
        "FindYou api docs",
    },
    servers: [
      {
        url: "http://localhost:3000", // 요청 URL
      },
    ],
  },
  apis: ["../src/api/routes/posts.js"], //Swagger 파일 연동
}
const specs = swaggereJsdoc(options)

module.exports = { swaggerUi, specs }