import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Weather API',
            version: '1.0.0',
            description: 'Weather API project for Worktable full stack position',
        },
        servers: [
            {
                url: 'http://localhost:5271',
            },
        ],
    },
    apis: ['./src/swaggerDef.ts'],
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwagger = (app: Express) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

export default setupSwagger;