import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import setupSwagger from './swagger';
import weatherRoutes from './routes/weatherRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 5271;

app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000'
}));

app.use(express.json());
app.use('/api/weather', weatherRoutes);

setupSwagger(app);

app.listen(port, () => {
    console.info(`Server running on port ${port}`);
    console.info(`Swagger docs available at ${process.env.BACKEND_URL}:${port}/api-docs`);
});