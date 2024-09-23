import express from 'express';
import spaceListingRoutes from './routes/SpaceListingRoutes';
import cors from 'cors'; // Add this line


const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL,
}));

app.use(express.json());
app.use('/api', spaceListingRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});