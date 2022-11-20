const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc")

const options = {
    swaggerDefinition:{
        openapi:"3.0.0",
        info:{
            version:"1.0.0",
            title:"FindYou API",
            description:"FindYou API 문서"
        },
        servers:[
            {
                url:"http://localhost:3000",
            }
        ]
    },
    apis:['./routes/*.js', './swagger/*','src/api/routes/*.js']
}

const specs = swaggerJsdoc(options);

module.exports = {swaggerUi,specs};