import { Router } from 'express';
import { getExampleData } from '../services/exampleService'; // Import service function

export const exampleController = () => {
    const router = Router();

    router.get('/', async (req, res) => {
        const exampleData = await getExampleData();
        res.json(exampleData);
    });

    return router;
};