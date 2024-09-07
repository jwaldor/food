import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { exampleController } from './controllers/exampleController'; // Import your controller

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: process.env.CLIENT_URL,
}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Use the example controller
app.use('/example', exampleController()); // Example route

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});